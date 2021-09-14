import {createMachine} from "xstate";

export const machine = createMachine({
  id:'colors',
  initial: 'green',
  states: {
    green: {
      on: {
        NEXT: 'yellow'
      }
    },
    yellow: {
      on: {
        NEXT: 'red'
      }
    },
    red: {
      on: {
        NEXT: 'green'
      }
    }
  }
});
