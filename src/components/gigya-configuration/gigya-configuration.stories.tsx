// import {h} from "@stencil/core";
// import { html } from 'lit-html';
// import {StoryContext} from "@storybook/web-components";
//import {useGigyaProvider} from "../../providers/gigya/configStore";
//  import {onGigyaService, useGigyaSdk} from "../store/gigya-script-store";

import {html} from "lit-html";
import {useGigyaProvider} from "../../providers/gigya/configStore";

const argsType = {

  domain: {
    options: ['gigya.com', 'gigya.eu1.com', 'gigya.au1.com'],
    control: {type: 'select'} // Automatically inferred when 'options' is defined
  },

}


export default {
  title: 'Gigya/Config',
  component: 'gigya-configuration',
  // subcomponents:['gigya-screen'],
  argTypes: argsType
};
// export const Store = (args) =><gigya-store {...args} ><slot></slot></gigya-store>;
// export const Store = ( {apiKey, domain}) =>html` <gigya-store  api-key="${apiKey}" domain="${domain}">
//          yo ${apiKey}
//         <slot></slot>
//     </gigya-store>`;

// const Template = (args) => GConfig(args);
const Template = ({apiKey, domain}, context) =>{
   const {setSite} = useGigyaProvider(context);
   function apply(){
     console.log('apply')
     setSite('test', {apiKey, domain})
   }
  return html`
  <gigya-configuration api-key="${apiKey}" domain="${domain}" onApplied="${apply}">
    <button @click="${apply}" >${apiKey}</button>
  </gigya-configuration> `;}
export const Store = Template.bind({});
Store.args = {
  apiKey: '3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ',
  domain: 'gigya.com'
};
Store.title = "Gigya/Config";

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


