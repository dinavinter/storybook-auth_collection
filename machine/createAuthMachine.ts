import {assign, createMachine, send} from 'xstate';
import STATES from './states';
import EVENTS from './events';
// import {checkAuth, login, logout} from './authService';

// https://xstate.js.org/viz/?gist=94e9a29e1ab016e06b8b354b9d558cf2
// {checkAuth, login, logout, register, retrieveUser}
const createAuthNMachine = () =>
  createMachine({
    id: 'authN-machine',
    initial:  'idle',
    context: {
      auth: false,
      isRegistered: false,
      user: {},
      error: ''
    },
    states: {
      [STATES.IDLE]: {
        on: {
          [EVENTS.REGISTER]: { target: STATES.REGISTER.NODE_NAME },
          [EVENTS.LOGIN]: { target: STATES.LOGIN.NODE_NAME },
          [EVENTS.AUTHENTICATE]:  { target: STATES.AUTHENTICATE.NODE_NAME }
        }
      },
      [STATES.AUTHENTICATE.NODE_NAME]: {
        initial: STATES.AUTHENTICATE.LOADING,
        states: {
          [STATES.AUTHENTICATE.LOADING]: {
            invoke: {
              id: 'authenticationService',
              src: 'checkAuth',
              onDone: {
                target: STATES.AUTHENTICATE.SUCCESS,
                actions: assign({
                  auth: (_, event) => {
                    return event.data;
                  }
                })
              },
              onError: {
                target: STATES.AUTHENTICATE.FAILURE,
                actions: assign({
                  isRegistered: false,
                  error: (_, event) => {
                    return event.data.message;
                  }
                })
              }
            }
          },
          [STATES.AUTHENTICATE.SUCCESS]: {
            on: {
              always: {
                target: `#authN-machine.${STATES.LOGIN.NODE_NAME}.${STATES.LOGIN.SUCCESS}`,
                actions: send({type:EVENTS.RETRIEVE_USER})
              }
            }
          },
          [STATES.AUTHENTICATE.FAILURE]: {
            on: {
              always: {
                target: `#authN-machine.${STATES.LOGIN.NODE_NAME}.${STATES.LOGIN.LOADING}`,

              }
            }
          }
        }},
      [STATES.REGISTER.NODE_NAME]: {
        initial: STATES.REGISTER.LOADING,
        states: {
          [STATES.REGISTER.LOADING]: {
            invoke: {
              id: 'registerService',
              src: 'register',
              onDone: {
                target: STATES.REGISTER.SUCCESS,
                actions: assign({
                  isRegistered: (_, event) => {
                    return event.data;
                  }
                })
              },
              onError: {
                target: STATES.REGISTER.FAILURE,
                actions: assign({
                  isRegistered: false,
                  error: (_, event) => {
                    return event.data.message;
                  }
                })
              }
            }
          },
          [STATES.REGISTER.SUCCESS]: {
            on: {
              [EVENTS.LOGIN]: {
                target: `#authN-machine.${STATES.LOGIN.NODE_NAME}.${STATES.LOGIN.LOADING}`
              }
            }
          },
          [STATES.REGISTER.FAILURE]: {
            on: {
              [EVENTS.REGISTER]: {
                target: `#authN-machine.${STATES.REGISTER.NODE_NAME}.${STATES.REGISTER.LOADING}`
              }
            }
          }
        }
      },
      [STATES.LOGIN.NODE_NAME]: {
        initial: STATES.LOGIN.LOADING,
        states: {
          [STATES.LOGIN.LOADING]: {
            invoke: {
              id: 'loginService',
              src:'login',
              onDone: {
                target: STATES.LOGIN.SUCCESS,
                actions: assign({
                  auth: (_, event) => {
                    return event.data;
                  }
                })
              },
              onError: {
                target: STATES.LOGIN.FAILURE,
                actions: assign({
                  isRegistered: false,
                  error: (_, event) => {
                    return event.data.message;
                  }
                })
              }
            }
          },
          [STATES.LOGIN.SUCCESS]: {
            initial: 'idle',
            states: {
              idle: {
                on: {
                  [EVENTS.RETRIEVE_USER]: {
                    target: STATES.RETRIEVE_USER.NODE_NAME
                  }
                }
              },
              [STATES.RETRIEVE_USER.NODE_NAME]: {
                initial: STATES.RETRIEVE_USER.LOADING,
                states: {
                  [STATES.RETRIEVE_USER.LOADING]: {
                    invoke: {
                      id: 'retrieveUserService',
                      src: 'getUser',
                      onDone: {
                        target: STATES.RETRIEVE_USER.SUCCESS,
                        actions: assign({
                          user: (_, event) => {
                            return event.data;
                          }
                        })
                      },
                      onError: {
                        target: STATES.RETRIEVE_USER.FAILURE,
                        actions: assign({
                          error: (_, event) => {
                            return event.data.message;
                          }
                        })
                      }
                    }
                  },
                  [STATES.RETRIEVE_USER.SUCCESS]: {},
                  [STATES.RETRIEVE_USER.FAILURE]: {
                    on: {
                      [EVENTS.RETRY_RETRIEVE_USER]: {
                        target: STATES.RETRIEVE_USER.LOADING
                      }
                    }
                  }
                }
              }
            },
            on: {
              [EVENTS.LOGOUT]: {
                target: 'logout'
              }
            }
          },
          [STATES.LOGIN.FAILURE]: {
            on: {
              [EVENTS.LOGIN]: {
                target: `#authN-machine.${STATES.LOGIN.NODE_NAME}.${STATES.LOGIN.LOADING}`
              }
            }
          },
          logout: {
            invoke: {
              id: 'logoutService',
              src: 'logout',
              onDone: {
                target: '#authN-machine.idle',
                actions: assign({
                  auth: false,
                  isRegistered: false,
                  error: false,
                  user: {}
                })
              },
              onError: {
                target: '#authN-machine.idle',
                actions: assign({
                  auth: false,
                  isRegistered: false,
                  error: false,
                  user: {}
                })
              }
            }
          }
        }
      }
    }
  });

export default createAuthNMachine;
