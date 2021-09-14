import {createStore} from "@stencil/store";

export declare type GigyaSdk = {
  socialize: any,
  accounts: any,
  gigya: any,
  // loaded: boolean,
  apiKey: string,
  showScreenSet: (args: any) => void
  showDebugUI:() => void
  // screenSet: ScreenSetController
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
      showDebugUI: ( ) =>  {
         gigya.showDebugUI()
      }
    };
  }

  if (state.gigya)
    cb(sdk(state.gigya));
  onChange('gigya', gigya => {
    cb(sdk(gigya));
  })
}


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
