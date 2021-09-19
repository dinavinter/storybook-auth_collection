// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import { html } from 'lit-html';
// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import {loginMachine} from "./machine";
// import {RenderMachine} from "storybook-xstate-addon/RenderMachine";



export default {
  title: 'Gigya/gigya-login',
  component:'gigya-login',
  parameters: {
    xstate: true,
    machine:loginMachine,


  }
 };

 const Template  = () => html`<gigya-login  ></gigya-login> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Default = Template.bind({});
Default.title= 'Gigya/gigya-login'
Default.parameters = {
  xstate: {
    xstate: true,
    machine:loginMachine,
  },
};


 // export const MachinePreview = () => RenderMachine(machine );
