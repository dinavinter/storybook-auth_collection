import {Component, h, Listen} from '@stencil/core';
import {popoverController} from '@ionic/core';
import {ScreenSetRoute} from "../auth-ruter";



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

  @Listen('screenSet')
  todoCompletedHandler(event: CustomEvent<ScreenSetRoute>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  @Listen('auth')
  authRequestHandler(event: Event) {
    console.log('Received the custom todoCompleted event: ', event);
  }


  render() {
    return [
      <ion-content>
        <ion-button onClick={(ev) => this.presentPopover(ev)}>Present Popover</ion-button>
      </ion-content>
    ];
  }
}

