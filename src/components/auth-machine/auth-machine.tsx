import {h, Component, ComponentInterface, State} from '@stencil/core';
 import  {machine} from './machine'
import {interpret} from "xstate";

@Component({
  tag: 'auth-machine',
  shadow: false
})
export class AuthMachine implements ComponentInterface {

  private _service = interpret(machine, { devTools: true });

  @State() state = machine.initialState;

  componentWillLoad() {
    this._service.subscribe(state => {
      this.state = state;
    });

    this._service.start();
  }

  disconnectedCallback() {
    this._service.stop();
  }

  render() {
    const {send} = this._service;

    return (
      <button onClick={() => send({type: "NEXT"})}>
        {this.state.value}
      </button>
    );
  }
}
