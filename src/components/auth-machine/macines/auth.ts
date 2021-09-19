import {createRequestMachine, RequestMachineContext, RequestMachineEvents} from "./request";
import {AuthRequest, AuthResult} from "./auth_types";

function session(): AuthResult {
  const item = localStorage.getItem('auth.state');
  if (item)
    return JSON.parse(item);
  else return false;
}



function checkAuth(
  _: RequestMachineContext,
  _e: RequestMachineEvents
) {
  return new Promise((resolve, reject) => {
    console.log(`#checkAuth init`);
    const auth = session();
    if (auth)
      resolve({...auth, authenticated:true});
    else reject({error: 'not-authenticated'});
  });


}


export const authStorageMachine = (r?: { provider: string }) => {
  return createRequestMachine<AuthRequest, AuthResult>(r, {
    loadService: checkAuth,
  })
}
