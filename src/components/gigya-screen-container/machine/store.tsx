import {createStore} from "@stencil/store";
import {FunctionalComponent, h} from "@stencil/core";
import {onGigyaService} from "../../store/gigya-script-store";
import {ShowScreenRequest} from "./index";

export type Container<State = any> = (
  state: State,
) => Element[] | Element;


export const DefaultScreenContainer: FunctionalComponent<GigyaScreenState> = ({containerId}) => {
    return (<div id={containerId}/>)

  }
;


const showScreenSet = (args: any) => {
  onGigyaService(({gigya}) => {
    console.log("gigya.account.showScreenSet");
    console.log(args);

    gigya.accounts.showScreenSet(args)
  })
}

/*const screenService = screenSetMachine.withConfig({
  actions: {
    onLoading: (context, event: ShowScreenEvent) => {
      showScreenSet({
        screenSet: event.request.ScreenSet,
        startScreen: event.request.StartScreen,
        containerID: state.container,
        afterSubmit: (args: any) => context.loadService.next({type: "RESOLVE", result: args})
      });
    }
  },

});*/
export declare type AfterSubmitCallback = {
  <IAfterSubmitEvent = any>(details: IAfterSubmitEvent): void;
}

export function onAfterSubmit(cb: AfterSubmitCallback) {
  state.afterSubmit = cb
}

const {state, onChange} = createStore<GigyaScreenState>({
  containerId: `gigya-screen-container`,
  // container: () => (<div id={state.containerId}/>),
   // showScreenSet:(arg)=>screenService.send({type: "FETCH" , request: arg})
  afterSubmit: (_) => {  },
  showScreenSet: (arg) => {
    // let afterSubmit = (args: any) => {
    //   state.afterSubmit(args)
    // }
    console.log("showScreenSet");
    console.log(arg);
    state.screenSet=arg;
    // showScreenSet({
    //   screenSet: arg.screenSet,
    //   startScreen: arg.startScreen,
    //   containerID: state.containerId,
    //   afterSubmit: afterSubmit
    // })
    return {
      onAfterSubmit: onAfterSubmit
    }
  },


});

onChange("screenSet", (screenSet)=>{
  let afterSubmit = (args: any) => {
    state.screenSet= null;
    state.afterSubmit(args)
  }
  showScreenSet({
    screenSet: screenSet.screenSet,
    startScreen: screenSet.startScreen,
    containerID: state.containerId,
    afterSubmit: afterSubmit
  })
})

declare type GigyaScreenState = {
  containerId: string,
  // container: Container<GigyaScreenState>,
  screenSet?: ShowScreenRequest,
  showScreenSet: (arg: ShowScreenRequest) => { onAfterSubmit: typeof onAfterSubmit }
  afterSubmit: AfterSubmitCallback
}


export const useScreenSet = () => {
  return {onChange, ...state}
};
export const ScreenState = state;
