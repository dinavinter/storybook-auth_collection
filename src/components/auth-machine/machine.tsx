// import { createRequestMachine, RequestMachineContext, RequestMachineEvents} from "./macines/request";
// import {authStorageMachine} from "./macines/auth";



// async function checkAuth(
//   context: RequestMachineContext,
//   _e: RequestMachineEvents
// ) {
//   console.log(`#checkAuth init`);
//   return  indexedDB.get()
//   return { ...context.request || {} , res: "res" };
// }
// export const machine = (r?: AuthRequest) => {
//   return createRequestMachine<AuthRequest, AuthResult>(r, {
//     loadService: checkAuth,
//   })
// }


// import {authClientMachine} from "./macines/authorize";

import {authClientMachine} from "./macines/authorize";
// import createAuthNMachine from "../../../machine/createAuthMachine";

export const authenticationMachine=authClientMachine;//authStorageMachine();
