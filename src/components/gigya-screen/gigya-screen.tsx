import {Component, h, Prop} from '@stencil/core';
// import {useGigyaSdk} from '../store/gigya-script-store'
import {useScreenSet} from "../gigya-screen-container/machine/store";

@Component({
  tag: 'gigya-screen',
  styleUrl: 'gigya-screen.css',
  shadow: false,
})
export class GigyaScreen {
  @Prop() screen_set: string;
  @Prop() start_screen: string;
  container = `gigya-screen-container`;


  async componentDidLoad() {

    // const {showScreenSet} = await useGigya();
    const {showScreenSet} = useScreenSet();

    showScreenSet({
      screenSet: this.screen_set,
      startScreen: this.start_screen
    });

  }


  render() {
    console.log(`Screen Page ${this.screen_set}`)
    return (

      <div>
      </div>
    )

  }

}
