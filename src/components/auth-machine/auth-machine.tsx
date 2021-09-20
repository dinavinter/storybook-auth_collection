
import {h, Component, ComponentInterface, State, Prop, Host} from '@stencil/core';
import {authenticationMachine} from './machine'
import {interpret, Interpreter} from "xstate";
import {AuthRequest} from "./macines/auth_types";
import {InteractionMachineContext} from "../interaction-machine/machine";
import {MachineServiceContext} from "../context/MachineContext";
 import Tunnel from '../context/useMachineService';
import {StateRender} from "../xstate-service/xstate";



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
      const {authenticationService, interactionService, loginService} = state.context;
      if (authenticationService) { // @ts-ignore
        this.authStorageState = authenticationService.state;
      }
      if (interactionService) {
        this.interactionService = interactionService;
      }

      if (loginService) {
        this.loginService = loginService;
      }

    });

    this._service.start();
  }

  disconnectedCallback() {
    this._service.stop();
  }


  render() {
    const {send} = this._service;
    const services: MachineServiceContext = {
      service: this.interactionService, name: 'interaction',
      login: this.loginService
    };
    return (

      <Host>
        <Tunnel.Provider state={services}>
          <button onClick={() => send({type: "AUTH", request: this.request})}>Send</button>
           <StateRender current={this.state} state={"notAuthenticated"}>
            <button onClick={() => send({type: "LOGIN", request: this.request, to: 'login'})}>Login</button>
          </StateRender>
          <StateRender current={this.state} state={"login"}>
            <slot name={'login'}/>
          </StateRender>

          <slot name={'interaction'}/>
        </Tunnel.Provider>

      </Host>

    );
  }

}
