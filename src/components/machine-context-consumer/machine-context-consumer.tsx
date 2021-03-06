import {Component, State, h } from "@stencil/core";
import {createContext} from "stencil-context";

const { Provider, Consumer } = createContext({ defaultValue: 'foo' });

interface Context {
  defaultValue: string;
  machine: string;
}

@Component({
  tag: 'machine-context-consumer',
})
export class MyComponentChild {
  @State() childProvider? = { defaultValue: 'child-data' };
  @State() clear: boolean = false;

  constructor() {
    // window.setTimeout(() => {
    //   this.childProvider = { defaultValue: 'first-level-updated-4sec' };
    // }, 4000);

    window.setTimeout(() => {
      this.clear = true;
    }, 6000);
  }
  render() {
    return (
      <Consumer>
        {({ defaultValue , machine}: Context) => [
          <div>2. {defaultValue} {machine} (child)</div>,
          <Provider
            value={
              this.clear
                ? { defaultValue }
                : this.childProvider || { defaultValue }
            }
          >
            <my-component-grandchild />
            {this.clear ? null : <Consumer>{() => {}}</Consumer>}
          </Provider>,
        ]}
      </Consumer>
    );
  }
}
