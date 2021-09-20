import {assign, createMachine, send, actions} from 'xstate';
 // import {checkAuth, login, logout} from './authService';
const { log } = actions
const ss = localStorage;



export  function  createAuthNMachine(){
  return createMachine(
    {
      id: 'auth',

      context: {
        user: {},
        gigyaToken: null,
        accessToken: null,
      },

      initial: 'anonymous',

      states: {
        anonymous: {
          entry: log('anonymous - entry'),
          always: [
            {
              target: 'loadProfile',
              cond: 'hasPersistedTokens',
            },
          ],
          on: {
            LOGIN: {
              target: 'loggingIn',
            },

            CALLBACK: 'loggedIn',
          },
        },

        loggingIn: {
          invoke: {
            id: 'execLogin',
            src: 'execLogin',
            onDone: 'loggedIn',
            onError: 'loginError',
          },
        },

        loggedIn: {
          always: 'loadTokens',
        },

        loadTokens: {
          invoke: {
            id: 'loadTokens',
            src: 'loadTokens',
          },

          always: [
            {
              target: 'loadProfile',
              cond: 'hasPersistedTokens',
              actions: assign({
                accessToken: ss.getItem('access_token'),
                gigyaToken: ss.getItem('id_token'),
                user: {},
              }),
            },
          ],

          after: {
            1000: 'loadTokens',
          },
        },

        loadProfile: {
          invoke: {
            id: 'loadProfile',
            src: 'loadProfile',
          },

          always: [
            {
              target: 'verifying',
              cond: 'hasPersistedProfile',
              actions: assign({
                accessToken: ss.getItem('access_token'),
                gigyaToken: ss.getItem('id_token'),
                user: ss.getItem('user'),
              }),
            },
          ],

          after: {
            1000: 'loadProfile',
          },
        },

        verifying: {
          entry: log('verifying - entry'),

          invoke: {
            src: 'userExists',
            onDone: 'authenticated',
            onError: 'registering',
          },
        },

        registering: {
          entry: log('registering - entry'),

          on: {
            CANCEL: 'loggingOut',
            DONE: 'authenticated',
            ERROR: 'registerError',
          },
        },

        authenticated: {
          on: {
            LOGOUT: 'loggingOut',
          },
          exit: log('authenticated - exit'),
        },

        loggingOut: {
          entry: log('loggingOut - entry'),

          invoke: {
            id: 'execLogout',
            src: 'execLogout',
            onDone: 'cleaning',
            onError: 'loginError',
          },

          exit: log('loggingOut - exit'),
        },

        cleaning: {
          entry: log('cleaning - entry'),
          always: {
            target: 'anonymous',
            actions: assign({ accessToken: null, gigyaToken: null, user: {} }),
          },

          exit: log('cleaning - exit'),
        },

        loginError: {
          entry: log('loginError - entry'),
        },

        loadError: {
          entry: log('loadError - entry'),
        },

        registerError: {
          entry: log('registerError - entry'),
        },
      },
    },

    {
      actions: {
        logError: (context, event) => {
          console.error('authMachine', context, event)
        },
      },

      guards: {
        hasPersistedTokens: () => {
          return !!(ss.getItem('id_token') && ss.getItem('access_token'))
        },

        hasPersistedProfile: () => {
          return !!ss.getItem('user')
        },
      }


    })
}



