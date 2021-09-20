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
  tag: 'gigya-login',
  styleUrl: 'gigya-login.css',
})
export class GigyaLogin implements ComponentInterface {
  // private _service = interpret(loginMachine, {devTools: true});

  @State() resolver;
  @State() state = loginMachine.initialState;

  componentDidLoad() {

  }

  componentWillLoad() {
    console.log('componentWillLoad')
    // this.state = this._service.initialState;
    this.resolver = loginService;//this.state.context.loadService;
    //
    // this._service.subscribe(state => {
    //   this.state = state;
    // });
    // this._service.onTransition(state => {
    //   this.state = state;
    // });
    onLogin(_ => {
      console.log('on login', this.state)
      const {getAccount, getToken} = gigya;

      loginService.onLogin(getAccount, getToken);

      // this.resolver.next({
      //   type: 'RESOLVE', result: {
      //       user: {
      //         name: details.UID
      //       },
      //       authenticated: true
      //
      //   }
      // });
      // this.resolver.complete();
    });

    // this._service.start('loading');

  }

  //
  // private start() {
  //   this._service.send({type: 'SEND', request: {provider: "site"}});
  //
  // }
  //
  //
  //  private reStart() {
  //   this._service.start();
  //
  // }
  // disconnectedCallback() {
  //   console.log('disconnectedCallback')
  //
  //   this._service.stop();
  // }


  render() {
    return (
      <Host>
        {/*<StateRender current={this.state} state={"idle"} >*/}
        {/*  <button onClick={_ => this.start()} > Login </button>*/}
        {/*</StateRender>*/}
        {/*<StateRender current={this.state} state={"loading"}>*/}
        <gigya-screen screen_set="Default-RegistrationLogin" start_screen="gigya-login-screen"></gigya-screen>
        {/*</StateRender>*/}

        {/*<StateRender current={this.state} state={"done"}>*/}
        {/*  <button onClick={_ => this.reStart()} > Logout </button>*/}
        {/*</StateRender>*/}
        <slot></slot>
      </Host>
    );
  }


}
