import {EventObject, sendParent, ServiceConfig, StateMachine} from 'xstate';
import {assign, send, actions, createMachine} from 'xstate';
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
export type RequestMachineEvents<TRequest, TResult> =
  | { type: 'FETCH', request: TRequest }
  | { type: 'RESOLVE'; result: TResult }
  | { type: 'REJECT'; error: any }
  | RequestMachineFinalEvents<TRequest, TResult>;

export interface RequestMachineContext<TRequest, TResult> {
  request?: TRequest,
  result?: TResult;
  error?: any;
}

export interface AnyRequestObject {
  [key: string]: any;
}

export type AnyResultObject = boolean | {
  [key: string]: any;
}

export interface AnyMachine extends StateMachine<any, any, any, any> {

}

export declare type RequestMachine<TRequest, TResult> =
  StateMachine<RequestMachineContext<TRequest, TResult>, any, RequestMachineEvents<TRequest, TResult>, any>
  | AnyMachine
//
// export interface RequestMachine<TRequest, TResult> extends StateMachine<RequestMachineContext<TRequest, TResult>, any, any, any> {
//
// }


export type RequestMachineFinalEvents<TRequest, TResult> =
  | { type: 'REQUEST.SUCCESSFUL' } & RequestMachineContext<TRequest, TResult>
  | { type: 'REQUEST.FAILED' & RequestMachineContext<TRequest, TResult> }

declare type EventsType = {
  success: 'REQUEST.SUCCESSFUL'
  failed: 'REQUEST.FAILED'
};

const RequestMachineEventTypes: EventsType = {
  success: 'REQUEST.SUCCESSFUL',
  failed: 'REQUEST.FAILED'
};


// declare type Services = {
//   load: '#service.load'
// };
// const RequestMachineServices:Services =  {
//   load: '#service.load'
// };
// export declare type LoaderService<TRequest extends AnyRequestObject, TResult extends AnyResultObject>  =   ServiceConfig<RequestMachineContext<TRequest, TResult>,RequestMachineEvents<TRequest, TResult>>;
//
// export declare type Loader<TRequest extends AnyRequestObject, TResult extends AnyResultObject>  = (request:TRequest )  => PromiseLike<TResult>
//
// declare type Services<TRequest extends AnyRequestObject, TResult extends AnyResultObject> = {
//   load: LoaderService<TRequest, TResult>
// };


// const RequestMachineServices = {
//   load: createInstance<LoaderService<TRequest, TResult>>
// };


// type Configurator<Type> = {
//   [Property in keyof Type as `config${Capitalize<string & Property>}`]: (value: Type[Property]) => void
//
// }
export type RequestMachineConfigurator<TRequest, TResult, TServices extends Services = Services> = (machine: RequestMachine<TRequest, TResult>, services: TServices, events: EventsType) => RequestMachine<TRequest, TResult>;

export declare type  MachineService<TContext, TEvent extends EventObject> =
  ServiceConfig<TContext, TEvent>;
// & { id: string };

// type ServiceId<Str extends string> = { id: `#service-${Str}` }
export declare type LoaderPromise<TRequest, TResult> = (request: TRequest) => PromiseLike<TResult>

// interface GenericService {
//   <Type extends MachineService<any, any>>(arg: Type): void;
// }


// interface Service {
//   <Type extends MachineService<any, any>>(arg: Type): void;
// }


// declare class ServicesMap {
//   [index: string]: ServiceConfig<any, any> ;
//
// }

declare class Services {
  // loadService: GenericService
  // map: ServicesMap

  // map: ServicesMap
  // [index: string]: ServiceConfig<any, any> | GenericService;


  // constructor() {
  //   this.map =  {}
  // }
}

// let myIdentity: GenericService = identity;
// myIdentity('a')

const ConfigureNoOp = (_machine: AnyMachine, _services, _events: any) => {
  return _machine.withConfig({
    // services: services.map
  })
};

export function useRequestMachine<TRequest extends AnyRequestObject, TResult extends AnyResultObject>(configure: RequestMachineConfigurator<TRequest, TResult> = ConfigureNoOp) {
  // declare function Id<Str extends string>(obj: Str): Type & Configurator<Type>;


  // export declare type  MachineService =
  //   ServiceConfig<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>
  //   & { id: string };
  // type Service<Str extends string> =
  //   MachineService<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>
  //   & { id: `#service-${Str}` }
  // declare type ServiceId<Str extends string> = `#service-${Str}`
  //
  // export declare type LoaderService = Service<'load'>;
  // export declare type Loader = (request: TRequest) => PromiseLike<TResult>
  // export declare type LoaderType =ServiceId<'load'>

  // declare class Services {
  //   service<TService extends MachineService>(service: TService) {
  //     this.map[service.id] = service
  //   }
  //
  //   map: Map<string, MachineService> = new Map<string, MachineService>();
  //
  //   load(loader: LoaderService): { service(loader) };
  //
  // }
  // function service<Type extends MachineService<any, any>>(arg: Type) {
  //   this[arg.id] = arg;
  // }

  // let LoaderService: GenericService =service ;

  // let services: Services = {
  //   map: new ServicesMap(),
  //   loadService(config: MachineService<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>) {
  //     this.map[`#service-load`] = config;
  //   }
  //
  // };

  function loadService(machine: RequestMachine<TRequest, TResult>, config: MachineService<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>) {
    return machine.withConfig({
      services: {
        [`#service-load`]: config
      }
    });
  }
  return {
    machine: (r?) => configure(createRequestMachine<TRequest, TResult>(r),{} , RequestMachineEventTypes),
    events: RequestMachineEventTypes,
    loadService(machine: RequestMachine<TRequest, TResult>, config: MachineService<RequestMachineContext<TRequest, TResult>, RequestMachineEvents<TRequest, TResult>>) {
      return loadService(machine,config);
    },
    loadPromise(machine: RequestMachine<TRequest, TResult>, promise: (request:TRequest  )=> PromiseLike<TResult>) {
      return loadService(machine , (c, _e)=> promise(c.request))
    }
  }


}




export function createRequestMachine<TRequest extends AnyRequestObject = AnyRequestObject, TResult extends AnyResultObject = AnyResultObject>(request?: TRequest): RequestMachine<TRequest, TResult> {

  // type RequestMachineEvents =
  //   | { type: 'FETCH', request: TRequest }
  //   | { type: 'RESOLVE'; result: TResult }
  //   | { type: 'REJECT'; error: any };
  //
  // interface RequestMachineContext {
  //   request?: TRequest,
  //   result?: TResult;
  //   error?: any;
  // }


  return createMachine<RequestMachineContext<TRequest, TResult>,
    RequestMachineEvents<TRequest, TResult>>(
    {
        id: 'fetch',
        initial: request ? 'loading' : 'idle',
        context: {
          request: request
        },
        states: {
          idle: {
            entry: log('idle - entry'),
            on: {
              FETCH: {
                target: 'loading',
                actions: ['setRequest']
              }
            }
          },
          loading: {
            entry: log('loading - entry'),
            invoke: {
              id: '#service.load',
              src: 'loadService',
              onDone: {
                actions: send((_, event, _m)=>{return {
                  type: "RESOLVE",
                  result:   event.data,
                  time:   Date.now()
                }})
              },
              onError: {
                actions: [
                  send((_, event, _m)=>{ return {
                    type: "REJECT",
                    error:  event.data,
                    time:   Date.now()
                  }})
                ]
              }
            },
            on: {
              RESOLVE: {target: 'successful', actions: ['setResult']},
              REJECT: {target: 'failed', actions: ['setError']}
            }
          },
          failed: {
            type: 'final',
            invoke: {
              id: 'onFailed',
              src: 'onFailed'
            }
          },
          successful: {
            type: 'final',
            invoke: {
              id: 'onSuccess',
              src: 'onSuccess'
            }
          }
        }
      },
    {

      actions: {

        setRequest: assign((_, event: any) => ({
          request: event.request
        })),
        setResult: assign((_, event: any) => ({
          result: event.result
        })),
        setError: assign((_, event: any) => ({
          error: event.error
        })),

        onFailed: sendParent((context, _) => ({
          ...context,
          type: RequestMachineEventTypes.failed
        })),

        onSuccess: sendParent((context, _) => ({
          ...context,
          type: RequestMachineEventTypes.success
        }))
      }
    }
  );
}
