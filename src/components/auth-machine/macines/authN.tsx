// import {createRequestMachine, RequestMachineContext, RequestMachineEvents, RequestMachineEventTypes} from "./request";
import {createRequestMachine } from "./request";
import {AuthRequest, AuthResult} from "./auth_types";

// import {Router} from "../../../router";
// import {waitForLogin} from "../../store/gigya-script-store";
import {sendParent} from "xstate";
import loginDialogMachine from "./login";

// async function navigateToAuthPage(
//  ) {
//   Router.push('/_gs/login');
//   // const {uid} = await waitForLogin();
//   // localStorage.setItem('auth.state', JSON.stringify({user: {name: uid}}))
// }

// declare global {
//   namespace NodeJS {
//     interface Global {}
//   }
// }

export const createAuthNMachine = (r?: { provider: string }) => {
  return createRequestMachine<AuthRequest, AuthResult>(r, {
    loadService: loginDialogMachine
  },  'authNDialog').withConfig({
    actions:{
      onLoading: sendParent({type:"LOGIN" , interaction: 'login'})
    }
  })

  }

