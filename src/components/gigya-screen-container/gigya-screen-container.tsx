import {Component, h} from '@stencil/core';
import {ScreenState, useScreenSet} from "./machine/store";


@Component({
  tag: 'gigya-screen-container',
  styleUrl: 'gigya-screen-container.css',
  shadow: false,
})
export class GigyaScreenContainer {





  async componentDidLoad() {



  }


  render() {
    const {containerId} = useScreenSet();
     return (
      <div>
        <div id={containerId}/>
        {ScreenState.screenSet && (<gigya-screen screen_set={ScreenState.screenSet.screenSet} start_screen={ScreenState.screenSet.startScreen}></gigya-screen>)}

      </div>
    )

  }
}
