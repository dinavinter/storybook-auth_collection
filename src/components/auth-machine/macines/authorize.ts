// import {assign, createMachine , sendParent, actions, spawn} from "xstate";
// import {ActorRefFrom} from "xstate/lib/types";
// import {RequestMachine, RequestMachineConfigurator, useRequestMachine} from "./request";
//
// const {log} = actions
//
//
//
// declare type User = {
//   name: string;
// }
//
//
// declare type IdToken = string |{
//   raw: string;
// }
//
// declare type AccessToken = string |{
//   raw: string;
// }
//
// declare type AuthResult = false | {
//   idToken: IdToken,
//   accessToken: AccessToken,
//   user: User
//
// }
//
// declare type AuthRequest = any
// declare type Error = string | any;
//
//
// declare type AuthContext = | {
//   authRequest: AuthRequest,
//   authResult?: AuthResult,
//   error?: Error,
//   lastUpdated?: number
//   authNMachine?: ActorRefFrom<RequestMachine<AuthRequest, AuthResult>>
// }
// function invokeAuthRequest(authRequest:AuthRequest):Promise<AuthResult> {
//   return new Promise((resolve, _) => {
//     resolve({idToken: "idToken", accessToken: "accessToken", user: authRequest.user})
//   })
// }
// const withAuthNService :RequestMachineConfigurator<AuthRequest, AuthResult> =(machine, _services)=> {
//   return machine.withConfig({
//     services:{
//       [`#service-load`]:  (context) =>  invokeAuthRequest(context.request)
//     }
//   })
// }
//
// export const createAuthorizeMachine = () => {
//   const {machine, events} = useRequestMachine<AuthRequest, AuthResult>(withAuthNService);
//
//
//   return createMachine<AuthContext>({
//     id: 'authz',
//     initial: 'idle',
//     states: {
//       idle: {
//         on: {
//           AUTHORIZE: [{
//             target: 'authentication',
//             cond: 'need-authentication',
//             actions: assign({
//               authRequest: (_, event) => event.data,
//               lastUpdated: (_) => Date.now(),
//               // authNMachine: (_, event) => spawn(machine(event.data), {sync: true})
//             }),
//           }]
//         }
//       },
//       authentication: {
//         on: {
//           [events.success]: {target: 'authenticated'},
//           [events.failed]: {target: 'notAuthenticated'}
//         }
//       },
//
//       authenticated: {
//         entry: [
//           log('authenticated - enter'),
//           sendParent((context) => {
//             return {type: 'AUTHORIZATION.RESULT', result: context.authResult}
//           })
//         ],
//         exit: log('authenticated - exit'),
//       },
//
//       notAuthenticated: {
//         entry: [
//           log('notAuthenticated - enter'),
//         ],
//         exit: log('notAuthenticated - exit'),
//       },
//     }
//   }).withConfig(guards());
//
//   function guards( ) {
//     return {
//       guards: {
//         ['need-authentication']: () => {
//           return true;
//         }
//
//       },
//     }
//
//   }
//
// }
import {authStorageMachine} from "./auth";
// import {createMachine, send, actions} from "xstate";
import {assign, createMachine, send, spawn, actions} from "xstate";
import {RequestMachineEventTypes} from "./request";
// import interactionDialogMachine from "./interaction";
import {interactionMachine} from "../../interaction-machine/machine";
// import {loginMachine} from "../../gigya-login/machine";
import {AuthResult} from "./auth_types";
import {loginMachine} from "./login";

const {log} = actions;


// const authNMachine = createAuthNMachine();
const authStorage = authStorageMachine();

export const loginService = loginMachine.initialState.context.loadService;
export const interactionService = interactionMachine.initialState.context.loadService;
export const authClientMachine = createMachine<{
  authStorage: any,
  authNMachine: null,
  interactionMachine: any,
  loginMachine: any,
  auth: AuthResult
}>({
    id: 'authClientMachine',
    initial: 'idle',
    context: {
      authStorage: null,
      authNMachine: null,
      interactionMachine: interactionMachine,
      loginMachine: loginMachine,
      auth: {}
    },

    on: {
      AUTH: {
        target: 'authorizing',
      },
      INTERACTION: [
        {
          target: 'interaction',
          actions: send((_c) => ({request: {interaction: 'login'}, type: "INTERACTION"}), {
            to: 'interaction'
          }),
        }
      ],
      LOGIN: [
        {
          target: 'login',
          // meta: {
          //   interaction: 'login'
          // }
        }
        //{
        //       //   target: 'login',
        //       // }
      ]
    },
    states: {
      idle: {
        on: {
          '': [
            {target: "notAuthenticated", cond: 'notAuthenticated'},
            {target: "authenticated", cond: 'authenticated'}
          ]
        }
      },

      interaction: {
        entry: [log("interaction - event"),
          assign({
            interactionMachine: () => spawn(interactionMachine, {sync: true, name: `interaction-machine`})
          }),
          send((_c, event) => ({...event, type: RequestMachineEventTypes.send}), {
            to: (context) => context.interactionMachine
          })],
        invoke: {
          src: (c) => c.interactionMachine,
          onDone: "authorizing",
          onError: "idle"
        }
      },

      authorizing: {
        entry: [log("authorizing - entry"),
          assign({
            authStorage: () => spawn(authStorage, {sync: true, name: `auth-storage`})
          }),
          send((_c, event) => ({...event, type: RequestMachineEventTypes.send}), {
            to: (context) => context.authStorage
          })],
        invoke: {
          src: (c) => c.authStorage,
          onDone: {
            target: "idle",
            actions: [log("#authorizing on done "), "setAuthResult"]
          },
          onError: {
            target: "idle",
            actions: [log("#authorizing on error "), "setAuthError"]
          }
        }

      },
      authenticated: {
        data: {
          auth: (context, _) => context.auth,

        }
      },
      login: {
        entry: [log("login - entry"),
          assign({
            loginMachine: () => spawn(loginMachine, {sync: true, name: `login-service`})
          }),
          send((_c) => ({request: {}, type: RequestMachineEventTypes.send}), {
            to: 'login-service'
          })
        ],
        invoke: {
          src: (context) => context.loginMachine,
          id: 'login-service',
          onDone: {
            target: "authorizing",
            actions: [log("#login on done ")]
          },
          onError: {
            target: "authorizing",
            actions: [log("#login on error ")]
          }
        }
      },
      notAuthenticated: {}
    }
  }, {
    actions: {
      setAuthResult: assign((_, event: any) => ({
        auth: event.data && event.data.result,
      })),
      setAuthError: assign((_, event: any) => ({
        auth: {error: event.data && event.data.error},
      })),
    },
    guards: {
      authenticated: (context) =>
         context.auth &&  context.auth.authenticated,
      notAuthenticated: (context) =>
       !context.auth || !context.auth.authenticated
    },
  }
);
