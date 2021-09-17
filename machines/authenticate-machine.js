import {createModel} from "xstate/es/model";
import {StateMachine} from "xstate/lib/types";


// declare type AuthResult = false | {
//   idToken: null,
//   accessToken: null,
//   user: User
// }
// declare type User ={
//   name: string;
// }
//
//
// declare type AuthRequest =  any
// declare type TokenRequest =  any
//
// declare type AuthContext= {
//   error: null,
//   authRequest: AuthRequest
//   requestMachine: StateMachine<AuthContext, any, any ,any>
// } & AuthResult

// export const authModel = createModel (
//   {
//     authRequest: null,
//     idToken: null,
//     accessToken: null,
//     user: null,
//     error: null
//
//   },
//   {
//     events: {
//       authenticate: (request?: AuthRequest) => ({ request }),
//       success: (result?: AuthResult) => ({ result }),
//       token: (request?: TokenRequest) => ({ request })
//     },
//     actions:{
//
//     }
//   }
// );

// const assignAuthResult = authModel.assign(
//   {
//     // The `event.type` here is restricted to "updateAge"
//     accessToken: (_, event:AuthResult) => event.accessToken, // inferred as `number`
//     idToken: (_, event:AuthResult) => event.idToken // inferred as `number`
//   }
// );


import {createMachine, assign, spawn, sendParent, send} from 'xstate';

export const authStateModel = createModel({
    idToken: null,
    accessToken: null,
    user: null,

  },
  {
    events: {
      authenticate: (request) => ({request}),
      success: (result) => ({result}),
      token: (request) => ({request}),
      error: (error) => ({error})
    },
    actions: {}
  });

export const authRequestModel = createModel(
  {
    authRequest: null,
    authResult: authStateModel.initialContext,
    error: null,
    lastUpdated: new Date()

  },
  {
    events: {
      authenticate: (authRequest) => ({authRequest}),
      success: (authResult) => ({authResult}),
      error: (error) => ({error})
    },
    actions: {}
  }
);

const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: {target: 'loading'}
      }
    },
    loading: {
      after: {
        3000: {target: 'failure.timeout'}
      },
      on: {
        RESOLVE: {target: 'success'},
        REJECT: {target: 'failure'},
        TIMEOUT: {target: 'failure.timeout'} // manual timeout
      },
      meta: {
        message: 'Loading...'
      }
    },
    success: {
      meta: {
        message: 'The request succeeded!'
      }
    },
    failure: {
      initial: 'rejection',
      states: {
        rejection: {
          meta: {
            message: 'The request failed.'
          }
        },
        timeout: {
          meta: {
            message: 'The request timed out.'
          }
        }
      },
      meta: {
        alert: 'Uh oh.'
      }
    }
  }
});


const authRequestMachine = authRequestModel.createMachine({
  id: 'authorize',
  initial: 'idle',
  states: {
    idle: {
      on: {
        REQUEST: 'request'
      }
    },
    request: {
      after: {
        1000: {
          actions: [
            assign({
              error: (e) => e.data,
              tags: ['timeout']
            }),
            sendParent({type: 'AUTHORIZATION.FAILED'})]
        }
      }
    }
  }
});

function invokeAuthRequest(context) {
  const {authRequest} = context;
  return new Promise((resolve, reject) => {
    resolve({idToken: "idToken", accessToken: "accessToken", user: authRequest.user})
  })
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //   .then((response) => response.json())
  //   .then((json) => json.data.children.map((child) => child.data));
}

const createSubredditMachine = (request) => {
  return authRequestModel.createMachine({
    id: 'authorize',
    initial: 'loading',
    context: authRequestModel.initialContext,
    states: {
      loading: {
        entry: authRequestModel.assign({
          authRequest: (_, event) => request,
          lastUpdated: () => Date.now()
        }),
        invoke: {
          id: 'check-auth',
          src: invokeAuthRequest,
          onDone: {
            target: 'success',
            actions: authRequestModel.assign({
              authResult: (_, event) => event.value,
              lastUpdated: () => Date.now()
            })
          },
          onError: {
            target: 'failure',
            actions: [
              assign({
                error: (e) => e.data,
                tags: ['error']
              })]

          }
        },
        after: {
          1000: {
            target: 'failure',
            actions: [
              assign({
                error: (e) => e.data,
                tags: ['error', 'timeout']
              })]

          }
        },

        idle: {
          after: {
            1000: {
              actions: [
                assign({
                  error: (e) => e.data,
                  tags: ['timeout']
                }),
                sendParent({type: 'AUTHORIZATION.FAILED'})]
            }
          },

        },
        success: {
          target: 'idle',
          actions: sendParent((context) => {
            return {type: 'AUTHORIZATION.RESULT', ...context}
          })
        },
        failure: {
          after: {
            100: {
              actions: [
                send({type: 'RETRY'})]
            }
          },
          on: {
            RETRY: 'loading'
          }
        }
      }
    }
  });
}
  ;

  const parentMachine = createMachine({
    id: 'auth',
    initial: 'idle',
    context: {
      authRequestModel.initAuthMachine(),
      authNMachine: null
    },
    states: {
      idle: {
        entry: assign({
          authNMachine: (_, _e) => spawn(authRequestMachine, {sync: true})
        }),
        on: {
          'AUTHORIZATION.REQUEST': {
            actions: assign()
            actions: send({type: 'REQUEST'}, {to: (context) => context.requestMachine})
          },
          'AUTHORIZATION.FAILED': {target: 'idle'}
        }
      },
      connected: {}
    }
  });


  authModel.createMachine({
    id: 'auth',
    initial: 'authenticating',
    context: authModel.initialContext,
    states: {
      check: {

        on: {
          authenticate: {
            invoke: {
              id: 'authChecker',
              src: 'authChecker',
              onDone: {target: 'loading', actions: 'setAuth'},
              onError: {target: 'signedOut'}
            },

          }
        }
      }
    }


  })
  const config = {
    id: 'auth',
    // we want to start by checking if
    // user is logged in when page loads
    initial: 'authenticating',
    // context is where you keep state
    context: {
      auth: null,
      user: null,
      error: null
    },
    // all possible authentication states
    states: {
      authenticating: {
        // when entering a state invoke
        // the authChecker service
        invoke: {
          id: 'authChecker',
          src: 'authChecker',
          onDone: {target: 'loading', actions: 'setAuth'},
          onError: {target: 'signedOut'}
        }
      },
      // we will enrich the user profile
      // with additional data
      loading: {
        invoke: {
          id: 'loader',
          src: 'loader',
          onDone: {target: 'signedIn', actions: 'setUser'},
          onError: {
            target: 'signedOut.failure',
            actions: ['setError', 'clearAuth']
          }
        }
      },
      signedIn: {
        // when receiving 'LOGOUT' event
        // transition to singingOut state
        on: {LOGOUT: {target: 'signingOut'}}
      },
      // signedOut has two sub-states
      // we will transition to failure in
      // case of wrong password, username
      // or network error
      signedOut: {
        initial: 'ok',
        states: {
          ok: {type: 'final'},
          failure: {}
        },
        on: {
          LOGIN: {target: 'signingIn'}
        }
      },
      signingIn: {
        invoke: {
          id: 'authenticator',
          src: 'authenticator',
          onDone: {
            target: 'authenticating',
            // clear error if successful login
            actions: 'clearError'
          },
          onError: {
            // transition to failure state
            // and set an error
            target: 'signedOut.failure',
            actions: 'setError'
          }
        }
      },
      signingOut: {
        invoke: {
          id: 'logout',
          src: 'logout',
          onDone: {
            target: 'signedOut',
            actions: ['clearAuth', 'clearError']
          },
          onError: {
            target: 'signedOut.failure',
            actions: ['clearAuth', 'setError']
          }
        }
      }
    }
  };

  export const initAuthMachine = services => {
    // define XState actions so that we can
    // refer to them by name in machine config
    const actions = {
      // clear user info on logout
      clearAuth: assign({user: null, auth: null}),
      clearError: assign({error: null}),
      // put Firebase auth object on context
      setAuth: assign({auth: (_, event) => event.data}),
      // put user on context in loading service
      setUser: assign({user: (_, event) => event.data}),
      setError: assign({
        error: (_, event) => event.data
      })
    };

    // create an options object containing
    // actions and services
    const options = {
      actions,
      services
    };

    return createMachine(config, options);
  };
