import {popoverController} from "@ionic/core";





export class AuthController  {

  async Authenticate() {
    console.log('Authenticate' );

    const popover = await popoverController.create({
      component: 'gigya-screen',
      componentProps: {
        screen_set: "Default-RegistrationLogin", start_screen: 'gigya-register-screen'
      },
      translucent: true
    });
    await popover.present();

    const {role} = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
const authController = new AuthController();

export function authenticate(){
   return authController.Authenticate();
}
