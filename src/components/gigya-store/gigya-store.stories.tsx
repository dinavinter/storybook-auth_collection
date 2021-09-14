 // import {h} from "@stencil/core";
 // import { html } from 'lit-html';
 // import {StoryContext} from "@storybook/web-components";
 //import {useGigyaProvider} from "../../providers/gigya/configStore";
 //  import {onGigyaService, useGigyaSdk} from "../store/gigya-script-store";

 const argsType = {

  domain: {
    options: ['gigya.com', 'gigya.eu1.com', 'gigya.au1.com'],
    control: {type: 'select'} // Automatically inferred when 'options' is defined
  },

}


export default {
  title: 'Gigya/Store',
   component:'gigya-store',
  // subcomponents:['gigya-screen'],
  argTypes: argsType
};
// export const Store = (args) =><gigya-store {...args} ><slot></slot></gigya-store>;
// export const Store = ( {apiKey, domain}) =>html` <gigya-store  api-key="${apiKey}" domain="${domain}">
//          yo ${apiKey}
//         <slot></slot>
//     </gigya-store>`;

 // const Template = (args) => GConfig(args);

 export const Store =  ( {apiKey, domain }) => {
   // const {setSite} = useGigyaProvider(context);
   // setSite(name, {apiKey: apiKey, domain: domain});

   // function apply(_) {
   //   console.log(apply);
   //   setSite(name, {apiKey: apiKey, domain: domain});
   // }
   // onGigyaService(gigya =>   gigya.showDebugUI());


   return `<gigya-store api-key="${apiKey}" domain="${domain}"  ><button onClick="${_=> window.gigya.showDebugUI()}"  >showDebugUI</button></gigya-store>`
 }
   // return html` <div  >
   //   api Key: ${apiKey}
   //   domain: ${domain}
   //      <slot></slot>
   //   <gigya-configuration api-key="${apiKey}"  domain="${apiKey}"></gigya-configuration>
   //      <button @click="${apply}" >Apply</button>
   //  </div>` }
   // return html` <gigya-store  api-key="${apiKey}" domain="${domain}">
   //       yo ${apiKey}
   //      <slot></slot>
   //  </gigya-store>` }
Store.args = { apiKey: '3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ',  domain:'gigya.com' };
Store.title = "Gigya/Store";


