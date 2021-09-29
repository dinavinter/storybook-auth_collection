// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import {html} from 'lit-html';
// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import {subscribtionMachine} from "../auth-machine/macines/subscribtion";

// import {RenderMachine} from "storybook-xstate-addon/RenderMachine";


export default {
  title: 'Autn/subscription-machine',
  component: 'subscription-machine',
  parameters: {
    xstate: true,
    machine: subscribtionMachine.withContext({
      auth: "Logged-in",
      account: {email: "email@email.com"},
      consents: {newsletter: {isConsentGranted: true, preferences: {email: true, daily: true}}},
      subscription:{}
    }),


  }
};

const Template = ({
                    auth,
                    account,
                    consents,
                    subscription
                  }) => html`
  <subscription-machine context="${{
    auth,
    account,
    consents,
    subscription
  }}"></subscription-machine> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Default = Template.bind({});
Default.title = 'Autn/subscription-machine'
Default.args = {
  auth: "Logged-in",
  account: {email: "email@email.com"},
  consents: [{newsletter: {isConsentGranted: true, preferences: {email: true, daily: true}}}],

}
Default.parameters = {
  xstate: {
    xstate: true,
    machine: subscribtionMachine,
  },
};


// export const MachinePreview = () => RenderMachine(machine );
