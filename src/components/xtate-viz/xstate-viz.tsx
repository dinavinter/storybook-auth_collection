import {Component, Host, h, State} from '@stencil/core';
import {interpret, Interpreter} from "xstate";

import {createDevTools, inspect} from "@xstate/inspect";

inspect({
  // options
  // url: 'https://statecharts.io/inspect', // (default)
  // iframe: false // open in new window
});

import {getGlobal} from "xstate/lib/devTools";
import {EVENTS, INSPECT_ID} from "./constants";
import {inspectorMachine} from "./inspectorMachine";

declare global {
  namespace NodeJS {
    interface Global {
    }
  }
}

@Component({
  tag: 'xstate-viz',
  styleUrl: 'xstate-viz.css',
  // shadow: true,
})
export class XStateViz {
  private _service = interpret(inspectorMachine, {
    devTools: true, actions: {
      startInspector: () => {
        this.inspect();
      },
      // setDevTools: this.setGlobalTools
    }
  });
  @State() state = inspectorMachine.initialState;

  constructor() {
    this.emit.bind(this);
    this.setGlobalTools.bind(this);
    this.inspect.bind(this);
  }

  emit(event) {
    this._service.send({type: event});
  }

  setGlobalTools() {
    Interpreter.defaultOptions.devTools = false;
    const devTools = createDevTools();
    const global = getGlobal();

    if (global) {
      // @ts-ignore
      global.__xstate__ = devTools;
    }
    this.emit(EVENTS.DEV_TOOLS);
    Interpreter.defaultOptions.devTools = true;
  }

  inspect() {
    const global = getGlobal();

    Interpreter.defaultOptions.devTools = false;
    const iframe = window.parent.document.body.querySelector<HTMLIFrameElement>(
      `iframe#${INSPECT_ID}`
    );
    // @ts-ignore
    const devTools = global.__xstate__;
    if (!devTools || !iframe) {
      this.emit(EVENTS.ERROR);
      return;
    }
    inspect({
      iframe,
      devTools,
    });
    Interpreter.defaultOptions.devTools = true;

  }

  effect() {
    function handler(event: HandlerEvent) {
      if (typeof event.data !== "object" || !("type" in event.data)) return;
      window.postMessage(event.data, "*");
    }

    window.parent.addEventListener("message", handler);


    let unsubscribe = () => {
    };

    // cleanup
    return () => {
      unsubscribe();
      this.emit(EVENTS.RESET);
      window.parent.removeEventListener("message", handler);
      Interpreter.defaultOptions.devTools = false;
    };
  }

  componentDidLoad() {


  }

  componentWillLoad() {


    this._service.subscribe(state => {
      this.state = state;
      if (this.state.matches("init")) {
        this.emit("READY");
      }
      // if (this.state.matches("blank") || this.state.matches("hasIframe")) {
      //   this.setGlobalTools();
      // }

    });

    this._service.start();


  }

  disconnectedCallback() {
    this._service.stop();
  }

  render() {
    return  <Host
        style={{
          position: "relative",
          width: "100%",
          //  height: "100%",
        }}
      >
        <iframe
          id={INSPECT_ID}
          style={{
             width: "100%",
            height: "calc(100% - 4px)",
            // height: "calc(100% - 4px)",
          }}
          ref={(iframe) => {
            if (!iframe) return;
            inspect({
              // options
              // url: 'https://statecharts.io/inspect', // (default)
              iframe: iframe // open in new window
            });
          }}
        />
      </Host>

  }

  render1() {
    let state = this.state;
    let node = <p>Disabled, change story parameters to enable {state}.</p>;
    if (!state.matches("init")) {
      node = (
        <iframe
          id={INSPECT_ID}
          style={{
            width: "100%",
            height: "calc(100% - 4px)",
          }}
          ref={(iframe) => {
            if (!iframe) return;
            this.emit("IFRAME");
          }}
        />
      );
    }
    return (
      <Host>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: `calc(${state.context.height} - 4px)`,
          }}
        >
          {node}
        </div>
        <slot></slot>
      </Host>
    );
  }

}


interface HandlerEvent extends Event {
  data?: any;
}
