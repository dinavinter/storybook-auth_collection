import {h, VNode} from "@stencil/core";

declare interface AuthScreen {
  path: string

  render(sel: any): VNode
}


declare interface AuthScreens<TAuthScreen extends AuthScreen> {
  profile: TAuthScreen
  register: TAuthScreen;
  login: TAuthScreen;
  subscribe: TAuthScreen;

  Enumerate(): AuthRoute[]
}

export class ScreenSetRoute implements AuthScreen {

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

class GigyaScreens implements AuthScreens<ScreenSetRoute> {
  public profile: ScreenSetRoute;
  public register: ScreenSetRoute;
  public login: ScreenSetRoute;
  public subscribe: ScreenSetRoute;

  constructor() {
    this.profile = new ScreenSetRoute("/_gs/profile", "Default-ProfileUpdate", 'gigya-update-profile-screen');
    this.register = new ScreenSetRoute("/_gs/register", "Default-RegistrationLogin", 'gigya-register-screen');
    this.login = new ScreenSetRoute("/_gs/login", "Default-RegistrationLogin", 'gigya-login-screen'),
      this.subscribe = new ScreenSetRoute("/_gs/lite", "Default-LiteRegistration")

  }

  Enumerate(): AuthRoute[] {
    return [
      this.profile.route(),
      this.register.route(),
      this.login.route(),
      this.subscribe.route(),
    ]
  }

}


export interface AuthRoute {
  path: string
  route: any
  title?: string

  render(sel: any): VNode
}

export const AuthScreens = new GigyaScreens();

