import {createStore} from "@stencil/store";
import {GigyaSdk, useGigyaSdk} from './gigya-script-store'


declare type ConfigStore = {
  [index: string]: GigyaConfigState,
  current? :GigyaConfigState

}
export declare type GigyaConfig = {
  apiKey: string,
  domain: string,

}



declare type GigyaConfigState = GigyaConfig & {
  gigya: Promise<GigyaSdk>,
  script: HTMLScriptElement
}
const {state} = createStore<ConfigStore>({ });


function loadScript(apiKey: string,
                    domain: string): Promise<HTMLScriptElement> {
  const  src= `https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`
  return new Promise((resolve) => {
    console.log("loading script " + src);
    // if(window.gigya) delete window.gigya;

    var old = document.getElementById('gigya-sdk');
    if (old != null) {
      document.head.removeChild(old);
    }

      // const script =document.head.contains( state.current.script)? document.head.replaceChild( state.current.script, document.createElement('script')): document.createElement('script');
      const script = document.createElement('script');
    // script.id = config.apiKey;
    script.src = src;
    script.id = 'gigya-sdk'
    document.head.appendChild(script);
    resolve(script);
  });



}

export async function loadGigya(apiKey: string,
                                domain: string): Promise<GigyaSdk> {

  console.log("loadGigya " + apiKey);

  if (!state[apiKey]) {
    state[apiKey] = {
      apiKey: apiKey,
      domain: domain,
      gigya: useGigyaSdk(apiKey),
      script: await loadScript(apiKey, domain)
    }
     state.current = state[apiKey];


    return await state[apiKey].gigya
  }


}

export async function useGigya(): Promise<GigyaSdk> {
  return await state.current.gigya;
}


export const current:GigyaConfig = state.current;


