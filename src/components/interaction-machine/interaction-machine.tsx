import {Component, Host, h, Prop, Event} from '@stencil/core';
import {Interpreter, ServiceConfig} from "xstate";

import TunnelService from '../context/useMachineService';
import {InteractionMachineContext, InteractionMachineEvent, InteractionResponse} from "./machine";
import {MachineState} from "../xstate-service/xstate";

function select(state) {
  return state.context && state.context.interaction;

}

@Component({
  tag: 'interaction-machine',
  styleUrl: 'interaction-machine.css',
  shadow: true,
})
export class InteractionMachine {
  @Prop({mutable: true, reflect: true}) interaction: string = 'None';
  @Prop({mutable: true}) state: MachineState<InteractionMachineContext, InteractionMachineEvent> ;

  @Prop({mutable: true}) service: Interpreter<InteractionMachineContext, any, any, any>;

  @Event({eventName: "resolve"}) resolve: InteractionResponse;
  @Prop() loadService?: ( service:ServiceConfig<any>) => void;

  private stateChange = (props) => {
    const {current} = props;
    this.state= current;
    this.interaction = select(current);
  };



  render() {

    return (
      <Host>
        <slot name={this.interaction}/>

        {this.service &&
        <div>
          <xstate-service service={this.service} callback={this.stateChange} />
        </div>}

      </Host>
    );
  }

}

TunnelService.injectProps(InteractionMachine, ['service']);





