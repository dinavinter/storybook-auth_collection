import {createContext} from 'stencil-context';
import {Interpreter} from "xstate";
import {ScreenSetService} from "../gigya-screen-container/machine";

const {Provider, Consumer} = createContext<MachineServiceContext>({});

export declare type MachineServiceContext ={
  service?:Interpreter<any, any, any, any>;
  login?:Interpreter<any, any, any, any>;
  screenSet?:ScreenSetService;
  name?:string;

}

export function useService() {
  return  createContext<MachineServiceContext>({}).Consumer
}

export const MachineProvider = Provider;
export const MachineConsumer = Consumer;

