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

const {log} = actions;


// const authNMachine = createAuthNMachine();
const authStorage = authStorageMachine();
export const authClientMachine = createMachine<{
  authStorage: null,
  authNMachine: null,
  interactionMachine: any,
  loginMachine: any,
  auth: AuthResult
}>({
  id: 'client',
  initial: 'idle',
  context: {
    authStorage: null,
    authNMachine: null,
    interactionMachine: null,
    loginMachine: null,
    auth:null
  },
  on: {
    AUTH: {
      target: 'authorizing',
    },
    INTERACTION: [
      {
        target: 'interaction',
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
        always:[
          {target: "notAuthenticated" , cond: context => !context.auth || !context.auth.authenticated},
          {target: "authenticated" , cond: context => context.auth && context.auth.authenticated}
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
        onDone:  {
          target: "idle",
          actions: [log("on done "), assign({
            auth: (_, event) => {
              return {...event.data.result || {}, error:event.data.error} ;
            }
        })]},
        onError: {
          target: "idle",
          actions: [log("on done "), assign({
            auth: (_, event) => {
              return {...event.data.result || {}, error:event.data.error} ;
            }
          })]}
      }

    },
    authenticated: {
      type: 'final'
    },
    login: {
      entry: [log("login - event"),
        // assign({
        //   loginMachine: () => spawn(loginMachine, {sync: true, name: `login-machine`})
        // }),
        send((_c) => ({request: {interaction: 'login'}, type: "INTERACTION"}), {
          to: (context) => context.interactionMachine
        })
        // send((_c) => ({request: {}, type: RequestMachineEventTypes.send}), {
        //   to: (context) => context.loginMachine
        // })
      ],
      // invoke: {
      //   src: (c) => c.loginMachine,
      //   onDone: 'authenticated'
      // }
    },
    notAuthenticated: {

    }
  }

});
