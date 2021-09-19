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
    this.login.subscribe(state => {
      console.log(state.value);
    });

    // this._service.start();
  }



   loginCallback(details) {
    console.log('on login')
    console.log( this.service);
    debugger;
    this.service.send( { type: 'RESOLVE' , result:details, to:'loading'});
    // this.service.state.context.callback(details);

  }

  waitForLogin=(send)=> {

    onLogin((details)=>  {
      console.log('on login')
      console.log( this.service);
      // debugger;

      send( { type: 'RESOLVE' , result:details});});


    return <div></div>;
  }


  render() {

    // const WaitForLogin = this.service && this.waitForLogin( this.service.send);
    return (
      <Host>
        {this.login &&
        <div>
          {/*<WaitForLogin send={ this.service.send}  />*/}

          <xstate-service service={this.login} >
          </xstate-service>

          <xstate-service service={this.login}  >
          </xstate-service>
        </div>}

        <interaction-machine slot="interaction">
          <div slot="login">
            <gigya-screen screen_set="Default-RegistrationLogin" start_screen="gigya-login-screen"></gigya-screen>
            {/*{this.service && <WaitForLogin service={this.service}/>}*/}
          </div>

        </interaction-machine>
        <slot></slot>
      </Host>
    );
  }

}

TunnelService.injectProps(InteractionMachine, ['service']);

