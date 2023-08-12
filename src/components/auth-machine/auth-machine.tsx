
import {h, Component, ComponentInterface, State, Prop, Host} from '@stencil/core';
import {authenticationMachine} from './machine'
import {interpret, Interpreter} from "xstate";
import {AuthRequest} from "./macines/auth_types";
import {InteractionMachineContext} from "../interaction-machine/machine";
import {MachineServiceContext} from "../context/MachineContext";
 import Tunnel from '../context/useMachineService';
import {StateRender} from "../xstate-service/xstate";
import {ScreenSetService} from "../gigya-screen-container/machine";
import MachineStateProvider from "../context/MachineStateProvider";



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
  @State() screenSetService: ScreenSetService;
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
      login: this.loginService,
      screenSet: this.screenSetService
    };
    return (

      <Host>
        <Tunnel.Provider state={services}>
          <button onClick={() => send({type: "AUTH", request: this.request})}>Check Auth</button>
          <button onClick={() => send({type: "REAUTH", request: this.request, to: 'reauth'})}>Reauth</button>

          <StateRender current={this.state} state={"notAuthenticated"}>
            <button onClick={() => send({type: "LOGIN", request: this.request, to: 'login'})}>Login</button>
          </StateRender>

          {/*{this.getProvider()}*/}
          <StateRender current={this.state} state={"login"} >
            <slot name={'login'}/>
          </StateRender>

          <StateRender current={this.state} state={"reauth"}>
            <slot name={'reauth'}/>
          </StateRender>
          <StateRender current={this.state} state={"authenticated"}>
            <button onClick={() => send({type: "REAUTH", request: this.request, to: 'reauth'})}>Reauth</button>

            <slot name={'authenticated'}/>
          </StateRender>

          <StateRender current={this.state} state={"notAuthenticated"}>
            <slot name={'notAuthenticated'}/>
          </StateRender>

          <slot name={'interaction'}/>
        </Tunnel.Provider>

      </Host>

    );
  }

  private getProvider() {
    return <div>
      <MachineStateProvider.Provider state={{state: this.state}}>
        <MachineStateProvider.Consumer>
          {({state}) => {
            console.log(state)
            if (state.matches('login'))
              return <slot name={'login'}/>
            return <div/>

          }}
        </MachineStateProvider.Consumer>
      </MachineStateProvider.Provider>

      <MachineStateProvider.Provider state={{state: this.state}}>
        <MachineStateProvider.Consumer>
          {({state}) => {
            console.log(state)
            if (state.matches('reauth'))
              return <slot name={'reauth'}/>
            return <div/>

          }}
        </MachineStateProvider.Consumer>
      </MachineStateProvider.Provider>
    </div>;
  }
}
