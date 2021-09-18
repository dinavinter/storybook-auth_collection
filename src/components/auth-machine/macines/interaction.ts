import { assign, createMachine, actions } from 'xstate';
const {done} = actions;
export interface InteractionDialogMachineContext {
  interaction?: string
  action?: () => Promise<void>;
  response?: any;
  errorMessage?: string;
}

type InteractionDialogMachineEvent =
  | {
  type: 'OPEN_DIALOG';
  action: () => Promise<void>;
  interaction: string
}
  | {
  type: 'CONFIRM';
}
  | {
  type: 'CANCEL';
};

const interactionDialogMachine = createMachine<
  InteractionDialogMachineContext,
  InteractionDialogMachineEvent
  >(
  {
    id: 'interactionDialog',
    initial: 'closed',
    context:{

    },
    states: {
      closed: {
        id: 'closed',
        on: {
          OPEN_DIALOG: {
            target: 'open',
            actions: 'assignActionToContext',
          },
        },
      },
      open: {
        exit: ['clearErrorMessage'],
        initial: 'idle',
        states: {
          idle: {
            on: {
              CANCEL: '#closed',
              CONFIRM: 'executingAction',
            },
          },
          executingAction: {
            invoke: {
              src: 'executeAction',
              onError: {
                target: 'idle',
                actions: 'assignErrorMessageToContext',
              },
              onDone: {
                target: '#closed',
                actions: ['assignResponseToContext', 'onSuccess'],
              },
            },
          },
        },
      },
    },
  },
  {
    services: {
      executeAction:  (context,_e) => async() => {
        // For demonstration purposes, I've commented this out.
         await context.action()
      },
    },
    actions: {
      assignActionToContext: assign((_, event) => {
        if (event.type !== 'OPEN_DIALOG') return {};
        return {
          action: event.action,
          interaction: event.interaction
        };
      }),
      // assignResponseToContext: assign((_, event) => {
      //   return {
      //     response: event.data,
      //   };
      // }),
      assignErrorMessageToContext: assign((_, event: any) => {
        return {
          errorMessage: event.data?.message || 'An unknown error occurred',
        };
      }),
      // clearErrorMessage: assign({
      //   errorMessage: undefined,
      // }),
      // clearActionFromContext: assign({
      //   action: undefined,
      // }),
      onSuccess: () => {
        console.log("interaction- onSuccess");
        done('.')
      },
    },
  },
);

export default interactionDialogMachine;
