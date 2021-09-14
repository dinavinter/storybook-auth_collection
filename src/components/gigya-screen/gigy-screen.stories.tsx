// import { text } from '@storybook/addon-knobs';
// import {h} from "@stencil/core";
import { html } from 'lit-html';

// const screenSet = (  default_value ='Default-RegistrationLogin') =>
//   text( "screen_set", default_value);
//
// const startScreen = (default_value ='gigya-register-screen') =>
//   text('start_screen', default_value);
//
// // @ts-ignore
// // import readme from './readme.md';
// storiesOf("Gigya/Screen" , module)
//   // .addDecorator(withActions('onClick'))
//   // .addDecorator(withKnobs)
//   .add(
//     'Default',
//     () => {
//       return `<gigya-screen screen_set=${screenSet()} start_screen=${ startScreen( )}  />`
//     }
//     // ,    {
//     //   notes: {
//     //     markdown: readme,
//     //   },
//     // }
//   );
const argsTypes= {
  screen_set: {
    control:'text',
      defaultValue: 'Default-ProfileUpdate',
  },
  start_screen: {
    control:'text',
      defaultValue: 'gigya-update-profile-screen',

  }
}
export default {
  title: 'Gigya/Screen',
  component:'gigya-screen',
   argTypes: argsTypes,
 };

 const Template  = ({screen_set, start_screen}) => html`<gigya-screen screen_set="${screen_set}" start_screen="${start_screen}" ></gigya-screen> `;
// export const Screen = (args) =>`<gigya-screen ${{...args}} ></gigya-screen>`;

export const Profile = Template.bind({});
Profile.args = {
  screen_set: "Default-ProfileUpdate",
  start_screen: 'gigya-update-profile-screen',
};

export const Register = Template.bind({});
Register.args = {
  screen_set: "Default-RegistrationLogin",
  start_screen: 'gigya-register-screen',
};
export const Login = Template.bind({});
Login.args = {
  screen_set: "Default-RegistrationLogin",
  start_screen: 'gigya-login-screen',
};

export const Lite = Template.bind({});
Lite.args = {
  screen_set: "Default-LiteRegistration"
};
