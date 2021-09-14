// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import { html } from 'lit-html';
// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import {machine} from "./machine";
// import {RenderMachine} from "storybook-xstate-addon/RenderMachine";



export default {
  title: 'Autn/auth-machine',
  component:'auth-machine',
  parameters: {
    xstate: true,
    machine:machine,


  }
 };

 const Template  = () => html`<auth-machine  ></auth-machine> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Default = Template.bind({});
Default.title= 'Autn/auth-machine'
Default.parameters = {
  xstate: {
    xstate: true,
    machine:machine,
  },
};


 // export const MachinePreview = () => RenderMachine(machine );
