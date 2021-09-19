import {Component, Host, h, Prop, Watch, State, Listen} from '@stencil/core';
import { Interpreter, Sender} from "xstate";
import {InteractionMachineContext, InteractionMachineEvent} from "../interaction-machine/machine";
import TunnelService from "../context/useMachineService";
import {InteractionMachine} from "../interaction-machine/interaction-machine";
import {onLogin} from "../store/gigya-script-store";
import {GigyaLoginContext} from "../gigya-login/machine";
// import {interpret} from "xstate/lib/interpreter";
// import {Machine} from "x state";

// const machine = Machine({
//   initial: 'pre initialization',
//   states: {
//     loading: {
//       on: {
//         NEXT: 'loaded'
//       }
//     },
//     yellow: {
//       on: {
//         NEXT: 'red'
//       }
//     },
//     red: {
//       on: {
//         NEXT: 'green'
//       }
//     }
//   }
// });

@Component({
  tag: 'login-machine',
  // styleUrl: 'login-machine.css',
  //  shadow: true,
})
export class LoadingMachine {

  constructor() {
  }

  @State() sender: Sender<InteractionMachineEvent>;

  @Prop({mutable: true}) service: Interpreter<InteractionMachineContext, any, any, any>;
  @Prop({mutable: true}) login: Interpreter<InteractionMachineContext, any, any, any>;

  @Watch("login")
  handleService(newValue: Interpreter<InteractionMachineEvent, any, any, any>, _) {
    // newValue.send()

    console.log('set service ' +newValue.id)
  }
  @Listen('onReady')
  onReadyHandler(event: CustomEvent<Interpreter<GigyaLoginContext>>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  connectedCallback() {
  }

  disconnectedCallback() {

  }




  componentWillLoad() {
    if(this.login){
      console.log("login service exists");
      this.login.subscribe(state => {
        console.log(state.value);
      });
    }

    onLogin(details => {
      console.log('on login',this.login.state.context)
      this.login.state.context.loadService.next({type: 'RESOLVE', result: details});
      // this.resolver.complete();
    });


  }

  render() {

    // const WaitForLogin = this.service && this.waitForLogin( this.service.send);
    return (
      <Host>
        <interaction-machine slot="interaction">
          <div slot="login">
            <gigya-screen screen_set="Default-RegistrationLogin" start_screen="gigya-login-screen"></gigya-screen>
          </div>

        </interaction-machine>
        <slot></slot>
      </Host>
    );
  }

}

TunnelService.injectProps(InteractionMachine, ['service']);

