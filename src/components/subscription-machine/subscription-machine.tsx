import {Component, Host, h, Prop, State} from '@stencil/core';
import {SubscriptionMachineContext} from "../auth-machine/macines/subscribtion";
import {interpret} from "xstate";
import {subscribtionMachine} from "../auth-machine/macines/subscribtion";

@Component({
  tag: 'subscription-machine',
  styleUrl: 'subscription-machine.css',
  shadow: true,
})
export class SubscriptionMachine {

  @State() _service;
  @State() state = subscribtionMachine.initialState;

  componentWillLoad() {

  this._service = interpret(subscribtionMachine, {
      devTools: true,

    });

     this._service.subscribe(state => {
      this.state = state;
    });


    this._service.start();
  }


  @Prop() context: SubscriptionMachineContext
  render() {
    return (
      <Host>
           <button onClick={() => this._service.send({type: "NEXT"})}>NEXT</button>

         {/*<xstate-viz />*/}
        <p>
          {JSON.stringify(this.state.context.subscription)}
        </p>
        <slot></slot>
      </Host>
    );
  }

}
