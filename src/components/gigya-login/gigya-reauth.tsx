import {Component, Host, h, State, ComponentInterface} from '@stencil/core';
import {loginMachine} from "./machine";
// import {interpret} from "xstate";
import {gigya, onLogin} from "../store/gigya-script-store";
import {loginService} from "../auth-machine/macines/login";
// import {StateRender} from "../xstate-service/xstate";

// async function profile() {
//   const account = await getAccount();
//   return {
//     name: account.profile.firstName
//
//   }
// }


@Component({
  tag: 'gigya-reauth',
  styleUrl: 'gigya-login.css',
})
export class GigyaLogin implements ComponentInterface {

  @State() resolver;
  @State() state = loginMachine.initialState;

  componentDidLoad() {


  }

  componentWillLoad() {
    console.log('componentWillLoad')
    this.resolver = loginService;

    onLogin(_ => {
      console.log('on login', this.state)
      const {getAccount, getToken} = gigya;

      loginService.onLogin(getAccount, getToken);

    });
  }



  render() {
    return (
      <Host>
        <gigya-screen screen_set="Default-ReAuthentication" start_screen="gigya-reauthentication-screen"></gigya-screen>

      </Host>
    );
  }


}
