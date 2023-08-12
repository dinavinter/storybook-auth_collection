// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import { html } from 'lit-html';
// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import {authenticationMachine} from "./machine";
import {AnyRequestObject} from "./macines/request";
// import {RenderMachine} from "storybook-xstate-addon/RenderMachine";



export default {
  title: 'Autn/auth-machine',
  component:'auth-machine',
  parameters: {
    xstate: true,
    machine:authenticationMachine,


  }
 };

 const Template  = ({request}) => html`<auth-machine request="${request}" >

   <gigya-login slot="login" />
   <div slot="authenticated" ><span>Thank You!</span></div>
   <div slot="notAuthenticated" ><span>Please Login</span></div>
 </auth-machine> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Default = Template.bind({});
Default.title= 'Autn/auth-machine'
Default.args =  {request: {reqdata:'ads'} as AnyRequestObject}
Default.parameters = {
  xstate: {
    xstate: true,
    machine:authenticationMachine,
  },
};


 // export const MachinePreview = () => RenderMachine(machine );
