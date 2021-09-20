import {AccessToken, AuthResult, User} from "./auth_types";
import { Machine, assign } from "xstate";
 // import { Machine, assign, interpret, State } from "xstate";
// import { Subject} from "rxjs";
// import {Typestate} from "xstate/lib/types";
import {Interpreter} from "xstate/lib/interpreter";

export function setAuth(auth: AuthResult) {
  localStorage.setItem('auth.state', JSON.stringify(auth))
}


export interface AuthMachineSchema {
  states: {
    unauthorized: {};
     loading: {};
     logout: {};
    refreshing: {};
     authorized: {};
   };
}

export type LoginEvent={ type: "LOGIN" , profile:()=> Promise<User>, token:()=> Promise<AccessToken> };

export type AuthMachineEvents =
  | LoginEvent
  | { type: "LOGOUT" }
  | { type: "REFRESH" }

declare type AuthMachineContext = AuthResult & {[key:string] :any};
export type AuthenticationService =Interpreter<AuthMachineContext, AuthMachineSchema, AuthMachineEvents>

export const authMachine = Machine<AuthMachineContext, AuthMachineSchema, AuthMachineEvents>(
  {
    id: "authentication",
    initial: "unauthorized",
    context: {
        token_key: "auth.token",
    },
    states: {
      unauthorized: {
        entry: "resetUser",
        on: {
          LOGIN: "loading",
        },
      },

      loading: {
        invoke: {
          src: "performLogin",
          onDone: { target: "authorized", actions: "onSuccess" },
          onError: { target: "unauthorized", actions: "onError" },
        },
      },

      refreshing: {
        invoke: {
          src: "getUserProfile",
          onDone: { target: "authorized", actions: "setUserProfile" },
          onError: { target: "unauthorized", actions: "onError" },
        },
        on: {
          LOGOUT: "logout",
        },
      },

      logout: {
        invoke: {
          src: "performLogout",
          onDone: { target: "unauthorized" },
          onError: { target: "unauthorized", actions: "onError" },
        },
      },
      authorized: {
        entry: "onAuthorized",
        on: {
          REFRESH: "refreshing",
          LOGOUT: "logout",
        },
      }

    },
  },
  {
    services: {
      performLogin: async (context, event:LoginEvent) => {
        const token=  await event.token()
        const profile=  await event.profile()
        localStorage.setItem(context.token_key, token);
        return { token: token , user: profile};
      },
      getUserProfile: async (_, event:LoginEvent) => {
        return {user: await event.profile()}
      },

      performLogout: async (_) => {
        localStorage.removeItem("authState");
        return Promise.resolve({})
      }
    },
    actions: {
      resetUser: assign((_: any, _event: any) => ({
        user: undefined,
        accessToken: undefined,
      })),
      setUserProfile: assign((_ctx: any, event: any) => ({
        user: event.data.user,
      })),
      onSuccess: assign((_ctx: any, event: any) => ({
        user: event.data.user,
        accessToken: event.data.token,
        message: undefined,
      })),
      onError: assign((_ctx: any, event: any) => ({
        message: event.data.message,
      })),
    },
  }
);



// const stateDefinition = JSON.parse(localStorage.getItem("authtate"));
//
// let resolvedState;
// if (stateDefinition) {
//   console.log(stateDefinition);
//   const previousState = State.create(stateDefinition);
//   console.log(previousState);
//
//   // @ts-ignore
//   resolvedState = authMachine.resolveState(previousState);
// }
// export const authStream = new  Subject<Typestate<AuthMachineContext>>();
//
// export const authService = interpret(authMachine)
//   .onTransition((state) => {
//     if (state.changed) {
//       localStorage.setItem("auth-state", JSON.stringify(state));
//       authStream.next(state);
//     }
//   })
//   .start(resolvedState);



// function sessionResult() {
//   const auth = session();
//   if (auth)
//     return {type: 'RESOLVE', result: {...auth, authenticated: true}};
//   else
//     return {type: "REJECT", error: 'not-authenticated'};
// }



// export const authState = ()=> authService.state;
export const isAuthenticated = (authService)=> authService.state.matches("authorized");

  export function authStorageMachine   ()   {
    // const authMachine= createRequestMachine<AuthRequest, AuthResult>(r, null,"auth-machine").withConfig({
    //   // guards:{
    //   //   isDone:  _  => false
    //   // },
    //   services:{
    //     loadService:(_) =>interval(60 * 1000).pipe(
    //       map((_) => (sessionResult())))
    //
    //   }
    // })

    return { authMachine};

  }


