// import {InspectorViz} from '@xstate/viz';

import {h, Component, ComponentInterface, State, Prop} from '@stencil/core';
import {authenticationMachine} from './machine'
import {interpret} from "xstate";
import {AuthRequest} from "./macines/auth_types";
// const { respond } = actions;

// const withAuthNService :RequestMachineConfigurator<any, any> =(machine, _services)=> {
//   return machine.withConfig({
//     services:{
//       [`#service-load`]:  (context) =>  Promise.resolve(context.request )
//     }
//   })
// }
//
// const {machine, loadPromise} = useRequestMachine( );
//
// loadPromise();
// // services.loadService( (_c,_e)=> {
// //   return Promise.resolve({a:'b'});
// // });
// async function delay(number: number) {
// return new Promise((resolve)=> {
//   setTimeout(_=>resolve,  number  )
//
// })
// }

// .withConfig({
//   services: {
//     loadService: async (context, _e) => {
//        console.log(`#service-load init`);
//       await  delay(500);
//     return  {...context.request , res:'res'};
//     }
//   }
// respond(  {  res:'res', type: "RESOLVE"}, { delay: 10 })}
// {
//     // Whenever parent sends 'PING',
//     // send parent 'PONG' event
//     // callback('PONG');
//     // onReceive((e) => {
//     //   if (e.type === 'PING') {
//     //     callback('PONG');
//     //   }
//     // });
//       return respond(  {...context.request , res:'res', type: "RESOLVE"}, { delay: 10 })}
// }
// })


@Component({
  tag: 'auth-machine',
  shadow: false
})
export class AuthMachine implements ComponentInterface {


  private _service = interpret(authenticationMachine, {devTools: true});

  @State() state = authenticationMachine.initialState;
  @State() authStorageState = authenticationMachine.initialState;
  @Prop() request: AuthRequest;
  @Prop() event: MessageEvent;

  componentWillLoad() {

    this._service.subscribe(state => {
      this.state = state;
    });
    this._service.onTransition((state) => {
      const {authStorage} = state.context;
      if(authStorage != null) { // @ts-ignore
        this.authStorageState=  authStorage.state;
      }
    });

    this._service.start();
  }

  disconnectedCallback() {
    this._service.stop();
  }

  // sendRequest() {
  //   this._service.send({type: "FETCH" , request:this.request})
  // }


  render() {
    const {send} = this._service;
     // InspectorViz({receiver:MachineViz})
    // const reciver :{
    //   receive: (listener: (e: MessageEvent) => void) => void;
    //
    // }
    return (
      <div>
        <button onClick={() => send({type: "AUTH", request: this.request})}>Send</button>
        <p>
          {JSON.stringify(this.state && this.state.context || this.state)}
          auth storage
          {JSON.stringify(this.authStorageState && this.authStorageState.context || this.authStorageState)}

        </p>
        {/*<InspectorViz receiver={ {receive:(e) =>{*/}
        {/*  console.log(e)*/}
        {/*}}}>*/}
        {/*  Last Event: {this.event}*/}
        {/*</InspectorViz>*/}
       </div>

    );
  }
}
