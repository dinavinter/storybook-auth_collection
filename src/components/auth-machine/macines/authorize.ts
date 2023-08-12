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
import {authMachine, AuthenticationService} from "./auth";
// import {createMachine, send, actions} from "xstate";
import {assign, createMachine, send, spawn, actions} from "xstate";
import {RequestMachineEventTypes} from "./request";
// import interactionDialogMachine from "./interaction";
import {interactionMachine} from "../../interaction-machine/machine";
// import {loginMachine} from "../../gigya-login/machine";
import {loginMachine} from "./login";

const {log} = actions;


// const authNMachine = createAuthNMachine();

export const loginService = loginMachine.initialState.context.loadService;
export const interactionService = interactionMachine.initialState.context.loadService;
export const authClientMachine = createMachine<{
    authenticationService: AuthenticationService,
    interactionService: any,
    loginService: any,
  }>({
      id: 'authClientMachine',
      initial: 'init',
      context: {
        authenticationService: null,
        interactionService: interactionMachine,
        loginService: loginMachine,
      },


      on: {
        AUTH: {
          target: 'authentication',
        },
        LOGIN: [
          {
            target: 'login',

          }],
        REAUTH: [
          {
            target: 'reauth',

          }
        ]
      },
      states: {
        init: {
          entry: assign({
            authenticationService: () => spawn(authMachine, {sync: true, name: `authentication-service`})
          }),
          after: {
            1: {
              target: "authentication"
            }
          }

        },
        idle: {},

        interaction: {
          entry: [log("interaction - event"),
            assign({
              interactionService: () => spawn(interactionMachine, {sync: true, name: `interaction-machine`})
            }),
            send((_c, event) => ({...event, type: RequestMachineEventTypes.send}), {
              to: (context) => context.interactionService
            })],
          invoke: {
            src: (c) => c.interactionService,
            onDone: "authentication",
            onError: "idle"
          }
        },

        authentication: {
          entry: [log("authentication - entry")],
          invoke: {
            src: "checkAuthn",
            onDone: "authenticated",
            onError: "notAuthenticated"

          },

        },
        authenticated: {
          data: {
            auth: (context, _) => context.auth,

          },
          on: {

            LOGIN: [
              {
                target: 'reauth',

              }

            ]
          }
        },
        login: {
          entry: [log("login - entry"),
            assign({
              loginService: () => spawn(loginMachine, {sync: true, name: `login-service`})
            }),
            send((context) => ({
              request: {authService: context.authenticationService},
              type: RequestMachineEventTypes.send
            }), {
              to: 'login-service'
            })
          ],
          invoke: {
            src: 'loginService',
            id: 'login-service',
            onDone: 'authentication',
            onError: "notAuthenticated",
            autoForward: true
          }

        },
        reauth: {
          entry: [log("reauth - entry"),
            assign({
              loginService: () => spawn(loginMachine, {sync: true, name: `login-service`})
            }),
            send((context) => ({
              request: {authService: context.authenticationService},
              type: RequestMachineEventTypes.send
            }), {
              to: 'login-service'
            })
          ],
          invoke: {
            src: 'loginService',
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
        loginService: (c) => c.loginService,
        checkAuthn: (context) => new Promise((reslove, reject) => {
          context.authenticationService.onTransition((state, _) => {
            if (state.matches("authorized")) {
              reslove(state.context)
            } else if (state.matches("unauthorized")) {
              reject(state.context.message)
            }
          })
        })
      },
      actions:
        {}
      ,

    }
  )
;


