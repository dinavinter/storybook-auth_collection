import {
  EventObject,
  State,
  StateMachine,
  StateSchema,
  Interpreter,
  InterpreterOptions
} from 'xstate';
import {h, FunctionalComponent, VNode} from '@stencil/core';
import {FunctionalUtilities} from "@stencil/core/internal/stencil-public-runtime";

export { State as MachineState };

export type Send<
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  > = Interpreter<TContext, TSchema, TEvent>['send'];

export type Renderer<
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  > = (
  current: State<TContext>,
  send: Send<TContext, TSchema, TEvent>,
  service: Interpreter<TContext, TSchema, TEvent>
) => Element[] | Element;

export interface MachineOptions extends Partial<InterpreterOptions> {
  immediate?: boolean;
}

export type MachineProps<
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  > = {
  machine: StateMachine<TContext, TSchema, TEvent>;
  options?: MachineOptions;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Machine: FunctionalComponent<
  MachineProps<any, any, EventObject>
  > = <
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  >(
  { machine, options, renderer }: MachineProps<TContext, TSchema, TEvent>,
  children?: VNode[]
) => (
  <xstate-machine machine={machine} options={options} renderer={renderer}>
  {...children}
  </xstate-machine>
);

export declare type ServiceCallback ={
  <TContext,TSchema, TEvent extends EventObject = EventObject >(arg: {
    current: State<TContext>,
    send: Send<TContext, TSchema, TEvent>,
    service: Interpreter<TContext, TSchema, TEvent>
  }): void;
}



export type ServiceProps<
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  > = {
  onReady?:   ( service:Interpreter<any>) => void;
  callback?: ServiceCallback
  service: Interpreter<TContext, TSchema, TEvent>;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Service: FunctionalComponent<
  ServiceProps<any, any, EventObject>
  > = <
  TContext,
  TSchema extends StateSchema = any,
  TEvent extends EventObject = EventObject
  >(
  { service , renderer}: ServiceProps<TContext, TSchema, TEvent>,
  children?: VNode[]
) => <xstate-service service={service} renderer={renderer}>{...children}</xstate-service>;

export type StateRender ={
<TContext >(props: {
  current: State<TContext>,
  state: string
}, children, utils: FunctionalUtilities): VNode| VNode[];

}

export const StateRender:StateRender = ({state , current  }, children, _)=>{

     return <div>{current.matches(state) && children || <div  id={"current state not much " +state + " current: " + current.value} />}</div>

}
