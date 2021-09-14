 // import {h} from "@stencil/core";
 import {StoryContext} from "@storybook/web-components";

 import { html } from 'lit-html';
 import {GigyaConfig} from "../../components/store/gigya-config-store";

export const withGigyaProvider  = (storyFn: () => any, context: StoryContext) => {
  const {apiKey, domain} = getSite(context.globals.provider)
  console.log("with provider " + context.globals.provider)
  console.log(siteStores)
  return (
    html`
     <gigya-store  api-key="${apiKey}" domain="${domain}">
        ${storyFn()}
    </gigya-store>
 `
  );}

export const useGigyaProvider  = (context: StoryContext) => {
  const setSite =(name:string,config:GigyaConfig ):void => {
     siteStores[name] =config;
    context.globals.provider = name;
  };

  const site= getSite(context.globals.provider);
  return  {site, setSite};
}

export const getSite =(name:string)=> siteStores[name];




 declare type ConfigStore = {
   [index: string]: GigyaConfig
 }
const siteStores : ConfigStore= {
  ['test']: {
    apiKey: '3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ',
    domain: 'gigya.com'
  }
}




// const testArgs = {
//   apiKey: {
//     defaultValue: '3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ'
//   },
//   domain: {
//     options: ['gigya.com', 'gigya.eu1.com', 'gigya.au1.com'],
//     control: {type: 'text'} // Automatically inferred when 'options' is defined
//   },
// }
