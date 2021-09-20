import {requestMachine, RequestMachineContext} from "../../auth-machine/macines/request";
import {RequestMachineEvents} from "../../../../machines/request";
import {MachineState} from "../../xstate-service/xstate";
import {InteractionRequest} from "../../interaction-machine/machine";
import {LoginCallback, LoginDetails} from "../../store/gigya-script-store";
import {loginService} from "../../auth-machine/macines/authorize";
 // import {actions, assign} from "xstate";
// const {log} = actions;


export interface GigyaLoginContext extends RequestMachineContext<LoginRequest, GigyaLoginResponse> {
  onLogin?: LoginCallback
  isLoggedin?: LoginCallback
}


export type GigyaLoginState = MachineState<any>;

export type InteractionMachineEvent = RequestMachineEvents<InteractionRequest, GigyaLoginResponse>

declare type LoginInteraction = 'gigya-login';

export interface LoginRequest extends InteractionRequest {
  interaction?: LoginInteraction
  action?: () => Promise<void>;
}

export interface GigyaLoginResponse extends LoginDetails {
  [key: string]: any;


}


export const loginMachine = requestMachine<LoginRequest, GigyaLoginResponse>("gigya-login").withConfig({

actions:{
  onSuccess: (context, _)=>{
    loginService.next({type: 'RESOLVE', result: context.result});

  },
  onError: (context, _)=>{
    loginService.next({type: 'REJECT', error: context.error});

  }
}

});





