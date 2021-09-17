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
import {createMachine, send, actions} from "xstate";
// import {assign, createMachine, send, spawn, actions} from "xstate";
import {RequestMachineEventTypes} from "./request";

const {log} = actions;

// const pingMachine = createMachine({
//   id: 'ping',
//   initial: 'active',
//   states: {
//     active: {
//       invoke: {
//         id: 'pong',
//         src: pongMachine
//       },
//       // Sends 'PING' event to child machine with ID 'pong'
//       entry: send({ type: 'PING' }, { to: 'pong' }),
//       on: {
//         PONG: {
//           actions: send({ type: 'PING' }, { to: 'pong', delay: 1000 })
//         }
//       }
//     }
//   }
// });

const authStorage = authStorageMachine();
export const authClientMachine = createMachine<{
  authStorage: null
}>({
  id: 'client',
  initial: 'idle',
  context: {
    authStorage: null
  },
  states: {
    idle: {
      // entry: assign({
      //   authStorage: spawn(authStorageMachine())
      // }),
      on: {
        AUTH: {
          target: 'authorizing'
        }
      }
    },
    authorizing: {
      entry: [log("authorizing - entry"),
        send({type: RequestMachineEventTypes.send}, {to: 'auth-storage'})],
      invoke: {
        id: 'auth-storage',
        src: authStorage
      },
      on: {
        [RequestMachineEventTypes.success]: {target: 'authorized'},
        [RequestMachineEventTypes.failed]: {target: 'not-authorized'}
      }
    },
    authorized: {
      type: 'final'
    },
    ['not-authorized']: {
      type: 'final'
    }
  }
});
