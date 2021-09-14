import {Component, Host, h} from '@stencil/core';
import {Route} from 'stencil-router-v2';


import {Router}  from '../../router'


//   class ScreenSetController {
//   @Event({
//     eventName: 'screenSet',
//     composed: true,
//     cancelable: true,
//     bubbles: true,
//   }) onShowScreenSet: EventEmitter<ScreenSet>;
//
//   showScreenSet(screenSet: string, startScreen: string) {
//     this.onShowScreenSet.emit({screen_set: screenSet, start_screen: startScreen});
//   }
//
//   screenSetHandler(screenSet: ScreenSet) {
//     this.onShowScreenSet.emit(screenSet);
//   }
//
//   ScreenSets: [
//     { screen_set: "Default-ProfileUpdate", start_screen: 'gigya-update-profile-screen', path: "/profile" },
//     { screen_set: "Default-RegistrationLogin", start_screen: 'gigya-register-screen', path: "/register" },
//     { screen_set: "Default-RegistrationLogin", start_screen: 'gigya-login-screen', path: "/login" },
//     { screen_set: "Default-LiteRegistration", path: "/lite" }
//   ]
//
//
// }


// class ScreenSet {
//   screen_set: string;
//   start_screen: string;
//
// }

class ScreenSetRoute {
  screen_set: string;
  start_screen?: string;
  path: string;

}

// function ionroutes() {
//   return <ion-app>
//
//     <ion-router>
//       {
//         this.screenSets.map(screen => {
//           return <ion-route url={screen.path} component="gigya-screen" componentProps={screen}/>
//         })
//       }
//     </ion-router>
//
//   </ion-app>;
// }
//
// function stentilRoutes() {
//   return <>
//     <ul>
//       <li>
//         <stencil-route-link custom="li" url="/_gs/profile">
//           <button>Profile page</button>
//         </stencil-route-link>
//       </li>
//       <li>
//         <stencil-route-link url="/demo" urlMatch={['/demo', '/demox']} exact={true}>
//           <button>Demo Link</button>
//         </stencil-route-link>
//       </li>
//
//     </ul>
//     <div class="hold-routes">
//
//       <stencil-route-switch>
//         <stencil-route url='/demo' component="gigya-screen"/>
//         {
//           this.routes()
//         })
//       </stencil-route-switch>
//
//     </div>
//   </>;
// }

@Component({
  tag: 'gigya-screen-router',
  styleUrl: 'gigya-screen-router.css',
  // shadow: true,
})
export class ScreenRouter {

  screenSets: ScreenSetRoute[] = [
    {screen_set: "Default-ProfileUpdate", start_screen: 'gigya-update-profile-screen', path: "/_gs/profile"},
    {screen_set: "Default-RegistrationLogin", start_screen: 'gigya-register-screen', path: "/_gs/register"},
    {screen_set: "Default-RegistrationLogin", start_screen: 'gigya-login-screen', path: "/_gs/login"},
    {screen_set: "Default-LiteRegistration", path: "/lite"}
  ]

  routes() {
    return this.screenSets.map(screen => {
      console.log(JSON.stringify(screen));
      return (<Route path={screen.path} render={() =>
        <gigya-screen {...screen} />
      }/>)
    })
  }

  // componentWillLoad() {
  //   Router.onChange('url',  (newValue, oldValue) => console.log(`new ${newValue} old ${oldValue}`));
  // }
  links() {
    return (
      <div  class="sidenav">
      {this.screenSets.map(screen => {
        return (<a href={screen.path} class={{'active': Router.activePath === screen.path}}>{screen.path}</a>
        )
      })}
    </div>)
  }



  async onRoute(screen: ScreenSetRoute) {
    // const toast = await toastController.create({
    //   message: "New version available.",
    //   buttons: [{ text: 'Reload', role: 'reload' }],
    //   duration: 0
    // });
    //
    // await toast.present();

    Router.push(screen.path);
  }


  render() {
    return (
      <Host>
        {this.links()}
        <Router.Switch>
          {this.routes()}
        </Router.Switch>
       </Host>
    );
  }


}
