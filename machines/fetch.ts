import {Machine, assign, send} from 'xstate';

interface FetchStates {
  states: {
    idle: {};
    pending: {};
    successful: {};
    failed: {};
  };
}


type Fetcher<TRequest, TResult> = (request: TRequest) => Promise<TResult>;


export function createFetchMachine<TRequest, TResult>(fetcher: Fetcher<TRequest, TResult>) {

  type FetchMachineEvents =
    | { type: 'FETCH', request: TRequest }
    | { type: 'RESOLVE'; result: TResult }
    | { type: 'REJECT'; error: any };

  interface FetchContext {
    request?: TRequest,
    result?: TResult;
    error?: any;
  }


  //   const fetchModel = createModel<FetchContext , any>(
  //     {
  //
  //     },
  //   {
  //     events: {
  //       fetch: (request: TRequest) => ({request }),
  //       resolve: (result: TResult) => ({result}),
  //       reject: (error: any ) => ({error})
  //     },
  //     actions: {}
  //   }
  // );

  return Machine<FetchContext,
    FetchStates,
    FetchMachineEvents>(
    {
      id: 'fetch',
      initial: 'idle',
      context: {},
      states: {
        idle: {
          on: {
            FETCH: {
              target: 'pending',
              actions: ['setRequest']
            }
          }
        },
        pending: {
          entry: ['fetchData'],
          invoke: {
            id: 'fetch-service',
            src: (c, _) => fetcher(c.request),
            onDone: {
              target: 'success',
              actions: send({
                type: "RESOLVE",
                result: (_, event) => event.data,
                time: () => Date.now()
              })
            },
            onError: {
              target: 'failure',
              actions: [
                send({
                  type: "REJECT",
                  error: (_, event) => event.data,
                  time: () => Date.now()
                })
              ]
            }
          },
          on: {
            RESOLVE: {target: 'successful', actions: ['setResults']},
            REJECT: {target: 'failed', actions: ['setError']}
          }
        },
        failed: {
          type: 'final'
        },
        successful: {
          type: 'final'
        }
      }
    },
    {
      actions: {
        setRequest: assign((_, event: any) => ({
          request: event.request
        })),
        setResults: assign((_, event: any) => ({
          result: event.result
        })),
        setError: assign((_, event: any) => ({
          error: event.error
        }))
      }
    }
  );
}
