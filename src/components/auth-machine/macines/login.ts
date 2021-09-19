import {requestMachine} from "./request";
import {AuthRequest, AuthResult} from "./auth_types";
import {setAuth} from "./auth";

export const loginMachine = requestMachine<AuthRequest, AuthResult>("login-service").withConfig({
  actions:{
    onSuccess: (context,_) => {
      setAuth({...context.result, authenticated:true})

    },

  }
});
