import {assign, createMachine} from "xstate";
interface Context {
  height: string;
}

type Events =
  | {
  type:
    | "STORY_CHANGE"
    | "IFRAME"
    | "DEV_TOOLS"
    | "READY"
    | "ERROR"
    | "DISABLE"
    | "RESET";
}
  | { type: "SET_HEIGHT"; height: string };


export const inspectorMachine = createMachine<Context, Events>(
  {
    id: "Storybook Inspector Tab",
    initial: "init",
    on: {
      RESET: "init",
      ERROR: "error",
      DISABLE: "disabled",
      SET_HEIGHT: { actions: ["setHeight"] },
    },
    states: {
      init: {
        entry: "setHeight",
        on: {
          READY: "blank",
        },
      },
      blank: {
        on: {
          IFRAME: "hasIframe",
          DEV_TOOLS: "hasDevTools",
        },
      },
      hasDevTools: {
        entry: "setDevTools",
        on: {
          IFRAME: "running",
        },
      },
      hasIframe: {
        on: {
          DEV_TOOLS: "running",
        },
      },
      running: {
        entry: "startInspector",
        on: {
          STORY_CHANGE: "init",
        },
      },
      error: {
        on: {
          STORY_CHANGE: "init",
        },
      },
      disabled: {},
    },
  },
  {
    actions: {
      setHeight: assign({
        height: (_, event) =>
          event.type === "SET_HEIGHT" && event.height ? event.height : "100%",
      }),
    },
  }
);
