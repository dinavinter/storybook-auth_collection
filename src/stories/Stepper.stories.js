
import {stepMachine} from "./step-machine";
import {html} from "lit-html";
import {Default} from "../components/auth-machine/auth-machine.stories";

export default {
  title: 'Example/Stepper',
  component: 'stepper-machine',
  parameters:{
    machine:stepMachine,
    xstate:true
  }
};

 const Template = () => html`<stepper-machine  ></stepper-machine>`;

export const Stepper = Template.bind({});
Stepper.title= 'Example/stepper-machine'
Default.parameters = {
  xstate: {
    xstate: true,
    machine:stepMachine,
  },
};

