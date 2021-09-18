import {Component, Host, h, State, Prop} from '@stencil/core';
import {Interpreter} from "xstate";
 // import { useService} from "../context/MachineContext";
// const Service = useService();
import TunnelService from '../context/useMachineService';
import Tunnel, {MachineState} from "../context/useMachineState"; // Import the Tunnel

@Component({
  tag: 'machine-consumer',
  shadow: true,
})
export class XStateServiceMachine {
  // private _service = interpret(interactionMachine, {devTools: true});
  @State() state;

  @Prop({
    mutable: true
  }) service: Interpreter<any, any, any, any>;


  componentWillLoad() {
    if (this.service) {
      this.state =this.service.state;
      this.service.onTransition(this.stateChange);

      this.service.start();

    }
  }


  private stateChange = (state) => {
    if (state.changed) {
      this.state = state;
    }
  };



  componentDidLoad() {
    if(this.service)
    this.service.onTransition(this.stateChange);
  }




  disconnectedCallback() {
    if (this.service) { this.service.off(this.stateChange);}
  }

  render() {
    const state:MachineState=  {
      state: this.state

    }
    return (
      <Host>
        <TunnelService.Consumer>
          {({service})=>{
            function string(state: any) {
              return state && JSON.stringify(state)
            }

            return <Tunnel.Provider state={state}  >
              <Tunnel.Consumer>
                {({state}) => <div>indide state {string(state)}</div>}
              </Tunnel.Consumer>
              Service Id {service && service.id}
              <slot />
            </Tunnel.Provider>

          }}
        </TunnelService.Consumer>

      </Host>
    );
  }

}

TunnelService.injectProps(XStateServiceMachine, ['service']);
