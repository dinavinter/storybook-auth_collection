import {requestMachine, RequestMachineContext} from "../../auth-machine/macines/request";
import {RequestMachineEvents, SendRequestEvent} from "../../../../machines/request";
import {MachineState} from "../../xstate-service/xstate";
 import {loginService} from "../../auth-machine/macines/authorize";
import {Interpreter} from "xstate";
import {StateSchema} from "xstate/lib/types";
 // import {actions, assign} from "xstate";
// const {log} = actions;


export interface GigyaScreenContext extends RequestMachineContext<ShowScreenRequest, ShowScreenResponse> {
 }


export type ShowScreenState = MachineState<any>;
export type ShowScreenEvent = SendRequestEvent<ShowScreenRequest>;
export type ShowScreenEvents = RequestMachineEvents<ShowScreenRequest, ShowScreenResponse>

export declare type ShowScreenRequest ={
  screenSet: string,
  startScreen: string
}


export interface ShowScreenResponse  {
  [key: string]: any;


}
export class AfterShowScreen implements ShowScreenResponse {
  [key: string]: any;


}



export const screenSetMachine = requestMachine<ShowScreenRequest, ShowScreenResponse>("screen-set").withConfig({

  actions:{
    onSuccess: (context, _)=>{
      loginService.next({type: 'RESOLVE', result: context.result});

    },
    onError: (context, _)=>{
      loginService.next({type: 'REJECT', error: context.error});

    },

  }

});
export const  afterSubmit=( event:ShowScreenResponse) =>{
  return {type:"RESOLVE" , result:event};
}

 // declare type ScreenSetService = Interpreter<GigyaScreenContext,StateSchema, ShowScreenEvents>;
export declare interface ScreenSetService extends Interpreter<GigyaScreenContext,StateSchema, ShowScreenEvents> {

}







