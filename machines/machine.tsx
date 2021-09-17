import {assign, createMachine, send} from 'xstate';
// import {createAuthorizeMachine} from "./macines/authorize";

declare type AuthResult = false | { userDetails?: UserDetails; }
declare type Error = null | { message: string }
declare type ErrorEvent = Error & { type: 'ERROR' }

declare type LoggedInEvent = {
  type: 'REPORT_IS_LOGGED_IN';
} & AuthResult

declare type LogoutEvent = {
  type: 'REPORT_IS_LOGGED_OUT';
}

declare type AuthResultEvent = LoggedInEvent | LogoutEvent


export  type Authenticator = {
  authenticate: () => Promise<AuthResult>
};


export  type AuthenticationMachineContext = {
  auth?: AuthResult
  error: Error
  loggedoutTime: Date
} & Authenticator;

interface UserDetails {
  username: string;
}

export type AuthenticationMachineEvent = |
  AuthResultEvent | {
  type: 'LOG_OUT';
} | {
  type: 'LOG_IN';
  userDetails: UserDetails;
} |
  ErrorEvent | {
  type: 'RETRY';
}

// interface User {
//   name: string;
// }

// interface UserContext {
//   user?: User;
//   error?: string;
// }

type LoggedInContext = AuthenticationMachineContext & {
  userDetails?: UserDetails;
  error: undefined;
};
type AuthState =
  | {
  value: 'idle';
  context: AuthenticationMachineContext;
} | {
  value: 'checking';
  context: AuthenticationMachineContext;
}
  | {
  value: 'loggedIn';
  context: LoggedInContext;
}
  | {
  value: 'loggedOut';
  context: AuthenticationMachineContext;
} | {
  value: 'error';
  context: AuthenticationMachineContext;
}


export const authenticationMachine = createMachine<AuthenticationMachineContext, AuthenticationMachineEvent, AuthState>(
  {
    id: 'auth',
    context: {
      auth: false,
      error: null,
      loggedoutTime: null,
      authenticate: async () => false
    },
    initial: 'checking',
    states: {
      checking: {
        invoke: {
          src: checkAuth,
          onDone: [
            {
              target: 'loggedIn',
              cond: (_: AuthenticationMachineContext, event) => event.data,
              actions: (_: AuthenticationMachineContext, event) => send({
                type: 'REPORT_IS_LOGGED_IN',
                userDetails: event.data.userDetails
              })
            },
            {
              target: 'loggedOut',
              actions: (_: AuthenticationMachineContext, _e) => send({type: 'REPORT_IS_LOGGED_OUT'})
            }
          ],
          onError: {
            target: 'error',
            actions: 'setError'
          },
        },
      },
      loggedIn: {
        // entry: [
        //   // send((_): AuthEvent=>{return {type: "REPORT_IS_LOGGED_IN" }})
        //   send({type: "REPORT_IS_LOGGED_IN"})
        // ],
        on: {
          LOG_OUT: 'signingOut'
        }
      },
      signingOut: {
        invoke: {
          src: logout,
          onDone: {
            target: 'loggedOut',
            actions: ['clearAuth', 'setLoggedoutTime']
          },
          onError: {
            target: 'error',
            actions: 'setError'
          }
        }
      },
      loggedOut: {
        // entry: [
        //   // send((_): AuthEvent=>{return {type: "REPORT_IS_LOGGED_IN" }})
        //   send({type: "REPORT_IS_LOGGED_OUT"})
        // ],
        on: {
          LOG_IN: 'signingIn'
        }
      },
      signingIn: {
        invoke: {
          id: "loginService",
          src: login,
          onDone: [
            {
              target: 'loggedIn',
              cond: (_: AuthenticationMachineContext, event) => event.data,
              actions: (_: AuthenticationMachineContext, event) => send({
                type: 'REPORT_IS_LOGGED_IN',
                userDetails: event.data.userDetails
              })
            },
            {
              target: 'loggedOut',
              actions: (_: AuthenticationMachineContext, _e) => send({type: 'REPORT_IS_LOGGED_OUT'})
            }
          ],
          onError: {
            target: 'error',
            actions: 'setError'
          }
        }
      },
      error: {
        on: {
          RETRY: 'checking',
          // actions: 'resetContext'

        }
      }
    },
    on: {
      REPORT_IS_LOGGED_IN: {
        target: "loggedIn",
        actions: assign(
          {
            loggedoutTime: (_) => null,
            auth: (
              _,
              event
            ) => event as LoggedInEvent
          })
      },
      REPORT_IS_LOGGED_OUT: "loggedOut"
    }
  },
  {
    actions: {}
  }
);


authenticationMachine.withConfig({
  actions: {
    // resetContext: assign({
    //   auth: null,
    //   error: null,
    //   loggedoutTime: null
    // }),
    // clearAuth: assign({
    //   auth: null
    // }),
    setLoggedoutTime: assign({
        loggedoutTime: (_) => new Date()
      }
    ),
    setAuth: assign(
      {
        loggedoutTime: (_) => null,
        auth: (
          _,
          event
        ) => event as LoggedInEvent
      }),
    setError: assign({
      error: (_, event) => event as ErrorEvent
    })
  }
});

// export const authenticationMachine= createAuthorizeMachine();

async function checkAuth(): Promise<AuthResult> {
  return false;
}

async function login(): Promise<AuthResult> {
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

function logout() {
  return Promise.all([
    // when it's too fast it doesn't feel like it worked 😂
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
}

