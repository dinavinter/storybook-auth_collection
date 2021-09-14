import {Component, h, Prop} from '@stencil/core';
// import {useGigyaSdk} from '../store/gigya-script-store'
import {useGigya} from "../store/gigya-config-store";

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

    const {showScreenSet} = await useGigya();
    showScreenSet({
      screenSet: this.screen_set,
      startScreen: this.start_screen,
      containerID: this.container
    });

  }


  render() {
    console.log(`Screen Page ${this.screen_set}`)
    return (
      <div>
        <div id={this.container}/>
      </div>
    )

  }

}
