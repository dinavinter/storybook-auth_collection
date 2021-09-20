import {createStore} from "@stencil/store";

export declare type LoginDetails<TContext extends any = any> = {
  provider: string;
  UID: string;
  context: TContext;
  eventName: "login"
  fullEventName: "login"
  loginMode: "standard" | "reauth"
  newUser: boolean
  [key: string]: any;

}

export declare type GigyaSdk = {
  socialize: any,
  accounts: any,
  gigya: any,
  // loaded: boolean,
  apiKey: string,
  showScreenSet: (args: any) => void
  showDebugUI: () => void,
  // onLogin?: ({provider, uid, context}) => void
  // screenSet: ScreenSetController
  getAccount(): Promise<any>,
  getToken(): Promise<string>,
}


const {state, onChange} = createStore<GigyaSdk>({
  accounts: {},
  socialize: {},
  gigya: undefined,
  apiKey: undefined,
  // loaded: false,
  showScreenSet(args) {
    this.gigya.accounts.showScreenSet(args)
  },
  showDebugUI() {
    this.gigya.showDebugUI()
  },

  getAccount: () => state.gigya && getAccount(state.gigya)() || Promise.reject("no gigya"),
  getToken: () => state.gigya && getJwt(state.gigya)()  || Promise.reject("no gigya")

});


function loadGigyaService() {
  const gigya = window.gigya;
  state.gigya = gigya;
  state.socialize = gigya.socialize;
  state.accounts = gigya.accounts;
  state.apiKey = gigya.apiKey
  // state.loaded = true;

  console.log("on gigya load")
}


declare global {

  interface Window {
    gigya: any,
    onGigyaServiceReady: any

  }


}
onChange('gigya', gigya => {
  console.log("on gigya loaded")
  console.log(gigya)
})


export declare type LoginCallback = {
  <TLoginDetails extends LoginDetails = LoginDetails>(details: TLoginDetails): void;
}

export function onLogin(cb: LoginCallback) {
  onGigyaService(({gigya}) => {
    gigya.socialize.addEventHandlers({
      context: {str: 'congrats on your'}
      , onLogin: cb
    });
  })
}


export async function waitForLogin(): Promise<LoginDetails> {
  return await new Promise((resolve) => {
    onLogin(details => resolve(details))
  });

}

function getAccount(gigya) {
  return () =>
    new Promise((resolve, reject) => {
      gigya.accounts.getAccountInfo({
        callback: function (res) {
          if (res.errorCode === 0) {
            resolve(res)
          } else {
            reject(res)
          }

        }
      })
    });
}

function getJwt(gigya) {
  return ():Promise<string> =>
    new Promise((resolve, reject) => {
      gigya.accounts.getJWT({
        callback: function (res) {
          if (res.errorCode === 0) {
            resolve(res.id_token as string)
          } else {
            reject(res)
          }

        }
      })
    });
}

function onGigyaService(cb: (gigya: GigyaSdk) => void) {
  function sdk(gigya) {
    return {
      gigya: gigya,
      socialize: gigya.socialize,
      accounts: gigya.accounts,
      apiKey: gigya.apiKey,
      showScreenSet: (args) => {
        gigya.accounts.showScreenSet(args)
      },
      showDebugUI: () => {
        gigya.showDebugUI()
      },

      getAccount: getAccount(gigya),
      getToken: getJwt(gigya)
    }
    // waitForLogin: waitForLogin()

  }

  if (state.gigya)
    cb(sdk(state.gigya));
  onChange('gigya', gigya => {
    cb(sdk(gigya));
  })
}


// window.gigya.accounts.getAccountInfo({
//   callback: function (res) {
//     if (res.errorCode === 0) {
//       setAccount(res);
//       setIsLoggedIn(true);
//
//     }
//     setGigya(window.gigya);
//
//   }
// });
//

if (window.gigya) {
  loadGigyaService();
}
window.onGigyaServiceReady = loadGigyaService;

export function useGigyaSdk(apiKey?: string): Promise<GigyaSdk> {
  return new Promise((resolve) => {
    onGigyaService(gigya => {
      console.log(`useGigya::loaded ${apiKey}`);
      console.log(gigya);

      if (gigya.gigya && (!apiKey || gigya.apiKey === apiKey)) {
        console.log(`useGigya::loaded ${apiKey}`);
        resolve(gigya)
      }
    })
  });
}


export {state as gigya, onGigyaService};
