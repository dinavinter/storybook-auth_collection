import {createStore} from "@stencil/store";

declare type AuthState = {
  isAuthenticated:boolean
}

const {state } = createStore<AuthState>({
  isAuthenticated:false
});




export {state as authState};
