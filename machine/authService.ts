export  type Authenticator = {
  authenticate: () => Promise<AuthResult>
};
declare type AuthResult = false | { userDetails?: UserDetails; }
interface UserDetails {
  username: string;
}

export async function checkAuth(): Promise<AuthResult> {
  return false;
}

export async function login(): Promise<AuthResult> {
  return {
    userDetails: {
      username: 'yo'
    }
  }
}

// async function checkAuth(): Promise<AuthResultEvent> {
//   return {type: 'REPORT_IS_LOGGED_OUT' };
// }
//
// async function login(): Promise<AuthResultEvent> {
//   await authenticate();
//   return {
//     type: 'REPORT_IS_LOGGED_IN' ,
//     userDetails: {
//       username: 'yo'
//     }
//   }
// }

export async function logout() {
  return Promise.all([
    // when it's too fast it doesn't feel like it worked 😂
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
}
