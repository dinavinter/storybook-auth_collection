// import {InspectorViz} from '@xstate/viz';

import {h, Component, ComponentInterface, State, Prop, Host} from '@stencil/core';
import {authenticationMachine} from './machine'
import {interpret, Interpreter} from "xstate";
import {AuthRequest} from "./macines/auth_types";
import {InteractionMachineContext} from "../interaction-machine/machine";
import {MachineServiceContext} from "../context/MachineContext";
// const { respond } = actions;
import Tunnel from '../context/useMachineService';
import {StateRender} from "../xstate-service/xstate"; // Import the Tunnel

// const withAuthNService :RequestMachineConfigurator<any, any> =(machine, _services)=> {
//   return machine.withConfig({
//     services:{
//       [`#service-load`]:  (context) =>  Promise.resolve(context.request )
//     }
//   })
// }
//
// const {machine, loadPromise} = useRequestMachine( );
//
// loadPromise();
// // services.loadService( (_c,_e)=> {
// //   return Promise.resolve({a:'b'});
// // });
// async function delay(number: number) {
// return new Promise((resolve)=> {
//   setTimeout(_=>resolve,  number  )
//
// })
// }

// .withConfig({
//   services: {
//     loadService: async (context, _e) => {
//        console.log(`#service-load init`);
//       await  delay(500);
//     return  {...context.request , res:'res'};
//     }
//   }
// respond(  {  res:'res', type: "RESOLVE"}, { delay: 10 })}
// {
//     // Whenever parent sends 'PING',
//     // send parent 'PONG' event
//     // callback('PONG');
//     // onReceive((e) => {
//     //   if (e.type === 'PING') {
//     //     callback('PONG');
//     //   }
//     // });
//       return respond(  {...context.request , res:'res', type: "RESOLVE"}, { delay: 10 })}
// }
// })


@Component({
  tag: 'auth-machine',
  shadow: true
})
export class AuthMachine implements ComponentInterface {

  private _service = interpret(authenticationMachine, {
    devTools: true,

  });

  @State() state = authenticationMachine.initialState;
  @State() interaction;
  @State() interactionService: Interpreter<InteractionMachineContext, any, any, any>;
  @State() loginService: Interpreter<InteractionMachineContext, any, any, any>;
  @State() authStorageState = authenticationMachine.initialState;
  @Prop() request: AuthRequest;
  @Prop() event: MessageEvent;

  componentWillLoad() {

    this._service.subscribe(state => {
      this.state = state;
    });

    this._service.onTransition((state) => {
      const {authStorage, interactionMachine, loginMachine} = state.context;
      if (authStorage != null) { // @ts-ignore
        this.authStorageState = authStorage.state;
      }
      if (interactionMachine) {
        this.interactionService = interactionMachine;
        console.log(this.interactionService);

      }

      if (loginMachine) {
        this.loginService = loginMachine;
        console.log(this.loginService);

      }

    });

    this._service.start();
  }

  disconnectedCallback() {
    this._service.stop();
  }

  // sendRequest() {
  //   this._service.send({type: "FETCH" , request:this.request})
  // }


  render() {
    const {send} = this._service;
    // InspectorViz({receiver:MachineViz})
    // const reciver :{
    //   receive: (listener: (e: MessageEvent) => void) => void;
    //
    // }
    const services: MachineServiceContext = {
      service: this.interactionService, name: 'interaction',
      login: this.loginService
    };
    return (

      <Host>
        <Tunnel.Provider state={services}>
          <button onClick={() => send({type: "AUTH", request: this.request})}>Send</button>
          {/*<button onClick={() => send({type: "LOGIN", request: this.request})}>Login</button>*/}
          <StateRender current={this.state} state={"notAuthenticated"}>
            <button onClick={() => send({type: "LOGIN", request: this.request, to: 'login'})}>Login</button>
          </StateRender>
          <StateRender current={this.state} state={"login"}>
            <slot name={'login'} />
          </StateRender>

          <slot name={'interaction'} />
        </Tunnel.Provider>

      </Host>

    );
  }

  // private setInteractionMachine(machine) {
  //   if (this.interactionService) {
  //     machine.interactionService = this.interactionService;
  //     console.log('set interaction service');
  //
  //   }
  //   machine.interactionService = this.interactionService;
  //   this._service.onTransition((state) => {
  //     const {interactionMachine} = state.context;
  //     if (interactionMachine) {
  //       machine.interactionService = this.interactionService;
  //       console.log('set interaction service');
  //
  //     }
  //
  //
  //   })
  // }
}
