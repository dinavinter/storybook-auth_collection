import { h} from '@stencil/core';

import { createProviderConsumer } from '@stencil/state-tunnel';

export declare type MachineState ={
  state?:any

}
//
// export default createProviderConsumer<MachineState>({
//   },
//   (subscribe, child) => {
//       return  <context-consumer subscribe={subscribe} renderer={(props)=>{
//         console.log(props);
//         return <machine-consumer >
//           {child(props)}
//         </machine-consumer>
//       }} />
//
//     }
//
// );




export default createProviderConsumer<MachineState>({
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )

);
