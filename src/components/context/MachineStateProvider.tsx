import {createContext} from "stencil-context";
import {createProviderConsumer} from "@stencil/state-tunnel";
import {h} from '@stencil/core';

export declare type MachineStateContext ={
  state?: any
}


const {Provider, Consumer} = createContext<MachineStateContext>({});


export const MachineStateProvider = Provider;
export const MachineStateConsumer = Consumer;



export default createProviderConsumer<MachineStateContext>({
    state: 'Hello!'
  },
  (subscribe, child) => {
    return (
      <context-consumer subscribe={subscribe} renderer={child}/>
    );
  }
);
