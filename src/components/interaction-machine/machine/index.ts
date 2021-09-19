import {requestMachine, RequestMachineContext} from "../../auth-machine/macines/request";
import {assign} from "xstate";
import {RequestMachineEvents} from "../../../../machines/request";
import {MachineState} from "../../xstate-service/xstate";
import {loginMachine} from "../../loading-machine/machine";
// import {actions, assign} from "xstate";
 // const {log} = actions;



export interface InteractionMachineContext extends RequestMachineContext<InteractionRequest, InteractionResponse>{
  interaction?: string
 }
export type InteractionMachineState = MachineState<any>;

 export type InteractionMachineEvent = RequestMachineEvents<InteractionRequest, InteractionResponse>

export interface InteractionRequest {
  interaction?: string
  action?: () => Promise<void>;
}
export interface InteractionResponse {
  [key: string]: any;
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
  services:{
    loadService:loginMachine
  }


}  );


