// import {assign, createMachine, send, sendParent, actions, spawn} from "xstate";
// import {createModel} from "xstate/es/model";
// import {StateMachine} from "xstate/es";
// import {ActorRefFrom} from "xstate/lib/types";
// import {createFetchMachine} from "./fetch";
// import {createRequestMachine, RequestMachine, useRequestMachine} from "./request";
//
// const {log} = actions
//
// function invokeAuthRequest(authRequest) {
//   return new Promise((resolve, _) => {
//     resolve({idToken: "idToken", accessToken: "accessToken", user: authRequest.user})
//   })
//   // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//   //   .then((response) => response.json())
//   //   .then((json) => json.data.children.map((child) => child.data));
// }
//
// declare type User = {
//   name: string;
// }
//
//
// declare type IdToken = {
//   raw: string;
// }
//
// declare type AccessToken = {
//   raw: string;
// }
//
//
// export const authStateModel = createModel({
//   idToken: {},
//   accessToken: null as string,
//   user: null as User,
// });
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
// // const authRequestModel = createModel(
// //   {
// //     authRequest: null,
// //     authResult: authStateModel.initialContext,
// //     error: null,
// //     lastUpdated: new Date()
// //
// //   },
// //   {
// //     events: {
// //       authenticate: (authRequest) => ({authRequest}),
// //       success: (authResult) => ({authResult}),
// //       error: (error) => ({error})
// //     },
// //     actions: {}
// //   }
// // );
// const createAuthorizeMachine = () => {
//   const {machine, events} = useRequestMachine<AuthRequest, AuthResult>();
//
//   declare type AuthContext = | {
//     authRequest: AuthRequest,
//     authResult?: AuthResult,
//     error?: Error,
//     lastUpdated?: number
//     requestMachine?: ActorRefFrom<RequestMachine<AuthRequest, AuthResult>>
//   }
//
//   return createMachine<AuthContext>({
//     id: 'authz',
//     initial: 'idle',
//     states: {
//       idle: {
//         on: {
//           AUTHORIZE: [{
//             target: 'authorization',
//             cond: 'notAuthorized',
//             actions: assign({
//               authRequest: (_, event) => event.data,
//               lastUpdated: (_) => Date.now(),
//               requestMachine: (_, event) => spawn(machine(event.data), {sync: true})
//             }),
//            }]
//         }
//       },
//       authorization: {
//         on: {
//           [events.success]: {target: 'connected'},
//           [events.failed]: {target: 'connected'}
//         }
//       },
//       loading: {
//         entry: assign({
//           lastUpdated: (_) => Date.now()
//         }),
//         invoke: {
//           id: 'check-auth',
//           src: 'checkAuth',
//           onDone: [{
//             target: 'authenticated',
//             cond: (_, event) => event.data,
//             actions: [assign({
//               authResult: (_, event) => event.data,
//               lastUpdated: (_) => Date.now()
//             })]
//           }, {
//             target: 'authentication_required',
//             cond: (_, event) => !event.data
//           }],
//           onError: {
//             target: 'failure',
//             actions: assign({
//               error: (_, event) => event.data
//             })
//
//           }
//         }
//       },
//       authentication_required: {},
//       authenticated: {
//         on: {
//           LOGOUT: 'loggingOut',
//         },
//         entry: [
//           log('authenticated - enter'),
//           sendParent((context) => {
//             return {type: 'AUTHORIZATION.RESULT', result: context.authResult}
//           })
//         ],
//         exit: log('authenticated - exit'),
//       },
//
//
//       failure: {
//         after: {
//           100: {
//             actions: [
//               send({type: 'RETRY'})]
//           }
//         },
//         on: {
//           RETRY: 'loading'
//         }
//       }
//     }
//   }
// }
// )
// ;
// }
