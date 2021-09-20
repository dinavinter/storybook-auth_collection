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
import {authMachine} from "./auth";
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
      initial: 'init',
      context: {
        authStorage: null,
        authNMachine: null,
        interactionMachine: interactionMachine,
        loginMachine: loginMachine,
        auth: {}
      },


      on: {
        AUTH: {
          target: 'authentication',
        },
        LOGIN: [
          {
            target: 'login',

          }

        ]
      },
      states: {
        init: {
          entry: assign({
            authStorage: () => spawn(authMachine, {sync: true, name: `auth-machine`})
          }),
          after: {
            1: {
              target: "authentication"
            }
          }

        },
        idle: {

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
            onDone: "authentication",
            onError: "idle"
          }
        },

        authentication: {
          entry: [log("authentication - entry")],
          invoke: {
            src: "checkAuthService",
            onDone: "authenticated",
            onError: "notAuthenticated"

          },

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
            send((context) => ({request: {authService: context.authStorage}, type: RequestMachineEventTypes.send}), {
              to: 'login-service'
            })
          ],
          invoke: {
            src: (c) => c.loginMachine,
            id: 'login-service',
            onDone: 'authentication',
            onError: "notAuthenticated",
            autoForward: true
          }

        },
        notAuthenticated: {}
      }
    }, {
      services: {
        checkAuthService: (context) => new Promise((reslove, reject) => {
          context.authStorage.onTransition((state, _) => {
            if (state.matches("authorized")) {
              reslove(state.context)
            } else if (state.matches("unauthorized")) {
              reject(state.context.message)
            }
          })
        })
      },
      actions:
        {
          setAuthResult: assign((_, event: any) => ({
            auth: event.data && event.data.result,
          })),
          setAuthError:
            assign((_, event: any) => ({
              auth: {error: event.data && event.data.error},
            })),
        }
      ,

    }
  )
;


