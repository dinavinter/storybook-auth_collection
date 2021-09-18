import {requestMachine} from "../../auth-machine/macines/request";
import { assign} from "xstate";
import {RequestMachineContext} from "../../../../machines/request";
// import {actions, assign} from "xstate";
 // const {log} = actions;



export interface InteractionMachineContext extends RequestMachineContext<InteractionRequest, InteractionResponse>{
  interaction?: string
}

export interface InteractionRequest {
  interaction?: string
  action?: () => Promise<void>;
}
export interface InteractionResponse {
  response?: any;
  errorMessage?: string;
}

// const viewMachine() = createMachine({
//   id: 'server',
//   initial: 'waitingForCode',
//   states: {
//     waitingForCode: {
//       on: {
//         CODE: {
//           actions: respond('TOKEN', { delay: 1000 })
//         }
//       }
//     }
//   }
// });
// type RequestOf<T> = T extends RequestEvent ? T["request"] : RequestMachineEvents;
//
//
// type FlattenRequest<Type> = Type extends RequestEvent<infer Request> ? Request : Type;
//
// type Request = RequestOf<InteractionRequest>;
//

export const interactionMachine = requestMachine<InteractionRequest>("Interaction").withConfig({
  // on:{
  //   SHOW: assign((_, event: {type:"SHOW"  ,  interaction?: string }) => {
  //     return {
  //       interaction: event.interaction
  //     };
  //   }),
  //
  //   CLOSE: assign((_) => {
  //     return {
  //       interaction: null
  //     };
  //   })
  // },
  actions: {
    onLoading: assign((context, _) => {
      return {
        interaction: context.request.interaction
      };
    }),
    onSuccess: assign((_) => {
      return {
        interaction: null
      };
    }),
    onFailed: assign((_) => {
      return {
        interaction: null
      };
    }),

    },

  services: {
      loadInteraction:(c)=>  Promise.resolve(c.request)
   },
});
