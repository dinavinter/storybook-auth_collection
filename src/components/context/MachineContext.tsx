import {createContext} from 'stencil-context';
import {Interpreter} from "xstate";

const {Provider, Consumer} = createContext<MachineServiceContext>({});

export declare type MachineServiceContext ={
  service?:Interpreter<any, any, any, any>;
  name?:string;
}

export function useService() {
  return  createContext<MachineServiceContext>({}).Consumer
}

export const MachineProvider = Provider;
export const MachineConsumer = Consumer;




