import {Component, h} from '@stencil/core';
import {popoverController} from '@ionic/core';



@Component({
  tag: 'gigya-screen-popover',
  styleUrl: 'gigya-screen-popover.css',
})
export class PopoverScreen {
   async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'gigya-screen',
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const {role} = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // @Listen('screenSet')
  // todoCompletedHandler(event: CustomEvent<ScreenSet>) {
  //   console.log('Received the custom todoCompleted event: ', event.detail);
  // }


  render() {
    return [
      <ion-content>
        <ion-button onClick={(ev) => this.presentPopover(ev)}>Present Popover</ion-button>
      </ion-content>
    ];
  }
}

