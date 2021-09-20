import {RejectEvent, requestMachine, SuccessEvent} from "./request";
import {AccessToken, AuthRequest, User} from "./auth_types";
 import { Subject} from "rxjs";
 // import {loginService, setAuth} from "./auth";


const loginObservable=new Subject<SuccessEvent | RejectEvent>()  ;

export const loginService = {
  onLogin: ( profile:()=> Promise<User>, token:()=> Promise<AccessToken> )=>{
    loginObservable.next({type:"RESOLVE" , result:{ profile: profile, token:token}})
  }

}
export const loginMachine = requestMachine<AuthRequest, { profile:()=> Promise<User>, token:()=> Promise<AccessToken>}>("login-service").withConfig({
actions: {
  onSuccess: context => {
    context.request.authService.send({type:"LOGIN" ,...context.result});

  }

}
}).withContext(
  {
    loginService: loginService,
    loadService: loginObservable
  }
);

