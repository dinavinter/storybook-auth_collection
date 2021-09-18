import {Component, Host, h, Prop} from '@stencil/core';
import {Interpreter} from "xstate";

import TunnelService from '../context/useMachineService';
import {InteractionMachineContext} from "./machine"; // Import the Tunnel

function select(state) {
  return state.context && state.context.interaction;

}

@Component({
  tag: 'interaction-machine',
  styleUrl: 'interaction-machine.css',
  shadow: true,
})
export class InteractionMachine {
  // private _service = interpret(interactionMachine, {devTools: true});
  @Prop({mutable: true, reflect: true}) interaction: string = 'None';

  @Prop({mutable: true}) service: Interpreter<InteractionMachineContext, any, any, any>;


  private stateChange = (props) => {
    const  {current}= props;
    this.interaction = select(current);
    console.log('stateChange' + this.interaction)
  };



  render() {
    return (
      <Host>
        <slot name={this.interaction}/>
        {this.service &&
        <div> <xstate-service service={this.service} callback={this.stateChange}>
        </xstate-service></div>}

      </Host>
    );
  }

}

TunnelService.injectProps(InteractionMachine, ['service']);





