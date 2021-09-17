const STATES = {
  IDLE: 'idle',
  AUTHENTICATE: {
    NODE_NAME: 'authenticate',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
  },
  REGISTER: {
    NODE_NAME: 'register',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
  },
  LOGIN: {
    NODE_NAME: 'login',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
  },
  RETRIEVE_USER: {
    NODE_NAME: 'retrieve_user',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
  }
};

export default STATES;
