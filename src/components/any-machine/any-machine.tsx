import {h, Component, ComponentInterface, State, Prop} from '@stencil/core';
import {authenticationMachine} from './machine'
import {interpret} from "xstate";
import {StateMachine} from "xstate/lib/types";
import {Interpreter} from "xstate/lib/interpreter";

// function getMachine(machine: string): StateMachine<any, any, any, any> {
//   return undefined;
// }
//

 // type TInterpreter = Interpreter<any, any, any, any>;
 type TMachine = StateMachine<any, any, any, any>;


@Component({
  tag: 'any-machine',
  shadow: false
})
export class AnyMachine implements ComponentInterface {

  // @Prop() machinePath: string
  @Prop() machine: StateMachine<any, any, any, any>
  @State() service: Interpreter<any, any, any, any>


  @State() state = authenticationMachine.initialState;


  // @Watch('machine')
  // loadService(newValue: TMachine, _: TMachine) {
  //   if (this.service) {
  //     this.service.stop();
  //   }
  //   this.interpret(newValue);
  //
  // }
  //
  // componentWillRender() {
  //   if (this.machine) {
  //     this.interpret(this.machine)
  //   }
  // }

  interpret(machine: TMachine) {
    this.service = interpret(machine, {devTools: true});
    this.service.subscribe(state => {
      this.state = state;
    });

    this.service.start();

  }

  componentWillLoad() {
    if (this.machine) {
      this.interpret(this.machine)
    }

  }

  disconnectedCallback() {
    this.service.stop();
  }

  render() {
    // const {send} = this._service;

    return (

      <p>
        {JSON.stringify(this.state)}
      </p>
    );
  }
}
