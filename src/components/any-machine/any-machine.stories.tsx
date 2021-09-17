// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import { html } from 'lit-html';
// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import {authenticationMachine} from "./machine";
import {interpret} from "xstate";
// import {RenderMachine} from "storybook-xstate-addon/RenderMachine";

 const service = interpret(authenticationMachine, {devTools: true});

 service.start();
export default {
  title: 'Autn/any-machine',
  component:'any-machine',
  parameters: {
    xstate: true,
    machine:authenticationMachine,
    state: service.state

  }
 };

 const Template  = () => html`<any-machine machine="${authenticationMachine}" ></any-machine> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Default = Template.bind({});
Default.title= 'Autn/any-machine'
Default.parameters = {
  xstate: {
    xstate: true,
    machine:authenticationMachine,
  },
};


 // export const MachinePreview = () => RenderMachine(machine );
