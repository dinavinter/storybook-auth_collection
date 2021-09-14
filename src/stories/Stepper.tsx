import {h, Component, ComponentInterface, State} from '@stencil/core';
import  {stepMachine} from './step-machine'
import {interpret} from "xstate";

@Component({
  tag: 'stepper-machine',
  shadow: false
})
export class Stepper implements ComponentInterface {

  private _service = interpret(stepMachine, { devTools: true });

  @State() state = stepMachine.initialState;

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
    const { send } = this._service;

    return (
      <button onClick={() => send({ type: "NEXT"})}>
        {this.state.value}
      </button>
    );


  }
}
