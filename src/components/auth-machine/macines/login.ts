import { assign, createMachine } from 'xstate';

export interface LoginDialogMachineContext {
  action?: () => Promise<void>;
  errorMessage?: string;
}

type LoginDialogMachineEvent =
  | {
  type: 'OPEN_DIALOG';
  action: () => Promise<void>;
}
  | {
  type: 'CONFIRM';
}
  | {
  type: 'CANCEL';
};

const loginDialogMachine = createMachine<
  LoginDialogMachineContext,
  LoginDialogMachineEvent
  >(
  {
    id: 'loginDialog',
    initial: 'closed',
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
                actions: ['clearActionFromContext', 'onSuccess'],
              },
            },
          },
        },
      },
    },
  },
  {
    services: {
      executeAction: (_) => () => {
        // For demonstration purposes, I've commented this out.
        // await context.action()
      },
    },
    actions: {
      assignActionToContext: assign((_, event) => {
        if (event.type !== 'OPEN_DIALOG') return {};
        return {
          action: event.action,
        };
      }),
      assignErrorMessageToContext: assign((_, event: any) => {
        return {
          errorMessage: event.data?.message || 'An unknown error occurred',
        };
      }),
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
      clearActionFromContext: assign({
        action: undefined,
      }),
      onSuccess: () => {
        alert('onSuccess fired!');
      },
    },
  },
);

export default loginDialogMachine;
