import { h} from '@stencil/core';

import { createProviderConsumer } from '@stencil/state-tunnel';
import {Interpreter} from "xstate";
import {MachineState} from "./useMachineState";
import {LoginService} from "../gigya-login/machine";

export declare type MachineServiceContext ={
  service?:Interpreter<any, any, any, any>;
  login?:LoginService;
  name?:string;
}

const TunnelService= createProviderConsumer<MachineServiceContext>({
    name: 'Hello!'
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
)
);

export  const createStateConsumer= (service: Interpreter<any, any, any, any>)=> createProviderConsumer<MachineState>({
    state: service.state
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);


// export  const createServiceConsumer= ()=> {
//
//   TunnelService.Consumer
// }
//
// const ServiceConsumer: FunctionalComponent<{}> = () => {
//   const State = ({service}) => {
//     return createStateConsumer(service);
//
//   }
//   // The casting on subscribe is to allow for crossover through the stencil compiler
//   // In the future we should allow for generics in components.
//   return  <TunnelService.Consumer>
//       {({service})=>
//        <State service={service} />}
//   </TunnelService.Consumer>
//
//
//   //consumerRender(subscribe, children[0] as any);
// }

 export default  TunnelService
