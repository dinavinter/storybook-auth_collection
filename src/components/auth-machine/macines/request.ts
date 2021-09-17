import {  sendParent, ServiceConfig, StateMachine} from "xstate";
import {assign, send, actions, createMachine} from "xstate";
// import {StateMachine} from "xstate/es";
const {log} = actions;

// interface RequestStates {
//   states: {
//     idle: {};
//     pending: {};
//     successful: {};
//     failed: {};
//   };
// }

// type Fetcher<TRequest, TResult> = (request: TRequest) => Promise<TResult>;
export type RequestMachineEvents<TRequest extends AnyRequestObject = AnyRequestObject,
  TResult extends AnyResultObject = AnyResultObject> =
  | { type: "SEND"; request: TRequest }
  | { type: "FETCH"; request: TRequest }
  | { type: "RESOLVE"; result: TResult }
  | { type: "REJECT"; error: any }
  | RequestMachineFinalEvents<TRequest, TResult>;

export interface RequestMachineContext<TRequest extends AnyRequestObject = AnyRequestObject,
  TResult extends AnyResultObject = AnyResultObject> {
  request?: TRequest;
  result?: TResult;
  error?: any;
}

export interface AnyRequestObject {
  [key: string]: any;
}

export type AnyResultObject =
  | boolean
  | {
  [key: string]: any;
};

export interface AnyMachine extends StateMachine<any, any, any, any> {
}

export declare type RequestMachine<TRequest extends AnyRequestObject = AnyRequestObject,
  TResult extends AnyResultObject = AnyResultObject> =
  | StateMachine<RequestMachineContext<TRequest, TResult>,
  any,
  RequestMachineEvents<TRequest, TResult>,
  any>
  | AnyMachine;

export type RequestMachineFinalEvents<TRequest, TResult> =
  | ({ type: "SEND" } & {  request: TRequest })
  | ({ type: "REQUEST-SUCCESSFUL" } & RequestMachineContext<TRequest, TResult>)
  | { type: "REQUEST-FAILED" & RequestMachineContext<TRequest, TResult> };

declare type EventsType = {
  send: "SEND";
  success: "REQUEST-SUCCESSFUL";
  failed: "REQUEST-FAILED";
};

export const RequestMachineEventTypes: EventsType = {
  send: "SEND",
  success: "REQUEST-SUCCESSFUL",
  failed: "REQUEST-FAILED",
};

export declare type MachineService<TRequest extends AnyRequestObject = AnyRequestObject,
  TResult extends AnyResultObject = AnyResultObject> = ServiceConfig<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>;

export declare type LoaderPromise<TRequest, TResult> = (
  request: TRequest
) => PromiseLike<TResult>;
// TContext extends  RequestMachineContext<TRequest, TResult>= RequestMachineContext<TRequest, TResult>,
// TEvent  extends  RequestMachineEvents<TRequest, TResult>= RequestMachineEvents<TRequest, TResult>,
// TRequestMachine  extends  StateMachine<TContext,any, TEvent, any>= RequestMachine<TRequest, TResult>,
// TService extends MachineService<TContext, TEvent > = MachineService<TContext, TEvent >

export function createRequestMachine<TRequest extends AnyRequestObject = AnyRequestObject,
  TResult extends AnyResultObject = AnyResultObject>(request?: TRequest, services?: {
  loadService: MachineService<TRequest, TResult>
}): RequestMachine<TRequest, TResult> {
  return createMachine<RequestMachineContext<TRequest, TResult>,
    RequestMachineEvents<TRequest, TResult>>(
    {
      id: "fetch",
      initial: request ? "loading" : "idle",
      context: {
        request: request,
      },
      states: {
        idle: {
          entry: log("idle - entry"),
          on: {
            SEND: {
              target: "loading",
              actions: ["setRequest"],
            } ,

            FETCH: {
              target: "loading",
              actions: ["setRequest"],
            },
          },
        },
        loading: {
          entry: log("loading - entry"),
          invoke: {
            src: "loadService",
            onDone: {
              // actions:[
              //   { target: "successful", actions: ["setResult"] }
              // ]
              actions: send((_, event, _m) => {
                return {
                  type: "RESOLVE",
                  result: event.data,
                  time: Date.now()
                }
              }),
            },
            onError: {
              actions: [
                send((_, event, _m) => {
                  return {
                    type: "REJECT",
                    error: event.data,
                    time: Date.now()
                  }
                }),
              ],
            },
          },
          on: {
            RESOLVE: {target: "successful", actions: ["setResult"]},
            REJECT: {target: "failed", actions: ["setError"]},
          },
        },
        failed: {
          entry: [log("failed - entry"), "onFailed"]

        },
        successful: {
          entry: log("successful - entry"),
            invoke: {
            id: "onSuccess",
            src: "onSuccess",
          }
        },
      },
    },
    {
      actions: {
        setRequest: assign((_, event: any) => ({
          request: event.request,
        })),
        setResult: assign((_, event: any) => ({
          result: event.result,
        })),
        setError: assign((_, event: any) => ({
          error: event.error,
        })),

        onFailed: sendParent((context, _) => ({
          ...context,
          type: RequestMachineEventTypes.failed,
        })),

        onSuccess: sendParent((context, _) => ({
          ...context,
          type: RequestMachineEventTypes.success,
        })),
      },
      services: services
    }
  );
}
