import {h, VNode} from "@stencil/core";

export class ScreenSetRoute {

  constructor(path: string, screen_set: string, start_screen?: string) {
    this.screen_set = screen_set;
    this.start_screen = start_screen;
    this.path = path;
  }

  screen_set: string;
  start_screen?: string;
  path: string;


  render() {
    return h(<gigya-screen {...this} />);
  }

  route(): AuthRoute {
    return {
      render: this.render,
      title: this.path,
      path: this.path,
      route: this
    };
  }
}


const screens = function () {

  return [
    new ScreenSetRoute("/_gs/profile", "Default-ProfileUpdate", 'gigya-update-profile-screen' ),
    new ScreenSetRoute("/_gs/register","Default-RegistrationLogin", 'gigya-register-screen'),
    new ScreenSetRoute( "/_gs/login","Default-RegistrationLogin", 'gigya-login-screen'),
    new ScreenSetRoute("/_gs/lite", "Default-LiteRegistration"),
  ]

}

function  ScreenSetRouter():AuthRoute[] {
  return screens().map(screen => {
    return screen.route()
  });

}


export interface AuthRoute {
  path: string
  route: any
  title?: string

  render(sel: any): VNode
}


export const Routes = ScreenSetRouter();

