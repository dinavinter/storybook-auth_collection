import {h, Component, Prop, State, Event, EventEmitter} from '@stencil/core';
import { Interpreter } from 'xstate';
import {Renderer, MachineState, ServiceCallback} from './xstate';

@Component({
  tag: 'xstate-service',
  shadow: false
})
export class XStateService {
  /**
   * Current machine state
   */
  @State() current: MachineState<any>;

  /**
   * An XState service.
   */
  @Prop() service!: Interpreter<any>;

  /**
   * Renderer callback
   */
  @Prop() renderer?: Renderer<any>;

  @Prop() callback?: ServiceCallback;
  @Event() ready?:EventEmitter<Interpreter<any>>;


  private stateChange = (state: MachineState<any>) => {
    if (state.changed) {
      this.current = state;
      this.callback &&  this.callback( {current: this.current, send:this.service.send, service:this.service})
    }
  };

  componentWillLoad() {
    this.current = this.service.state;
  }

  componentDidLoad() {
    this.ready && this.ready.emit(this.service);
    this.service.onTransition(this.stateChange);

  }

  disconnectedCallback() {
    this.service.off(this.stateChange);
  }

  render() {
    return [
      this.renderer &&
      this.renderer(this.current, this.service.send, this.service),
      <slot />,
    ];
  }
}
