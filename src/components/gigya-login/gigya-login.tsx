import {Component, Host, h, State, ComponentInterface, Prop} from '@stencil/core';
import {LoginService} from "./machine";
// import {interpret} from "xstate";
import {gigya, onLogin} from "../store/gigya-script-store";
import {loginService} from "../auth-machine/macines/login";
import TunnelService from "../context/useMachineService";
import {useScreenSet} from "../gigya-screen-container/machine/store";
import MachineStateTunnel from "../context/MachineStateProvider";
import {screenSetMachine} from "../gigya-screen-container/machine";
// import {StateRender} from "../xstate-service/xstate";

// async function profile() {
//   const account = await getAccount();
//   return {
//     name: account.profile.firstName
//
//   }
// }
function select(state) {
  return state.context && state.context.interaction;

}

@Component({
  tag: 'gigya-login',
  styleUrl: 'gigya-login.css',
  shadow:false
})
export class GigyaLogin implements ComponentInterface {

  @Prop({reflect: true }) screen_set: string = "Default-RegistrationLogin";
  @Prop({reflect: true }) start_screen: string = "gigya-login-screen";
  @State() state;
  @State() interaction;

  @State() resolver;
  @Prop({mutable: true }) login: LoginService;

  syncState(login: LoginService){
    this.state = login.state;

    login.subscribe && login.subscribe((state) => {
      this.state = state;
    })

    console.log(login);
    console.log(login.subscribe);

  }
  componentDidUpdate() {


    // if (this.state && this.state.matches("loading")) {
    //   const {showScreenSet} = useScreenSet();
    //
    //   showScreenSet({
    //     screenSet: this.screen_set,
    //     startScreen: this.start_screen
    //   });
    //   console.log(this.state);
    //
    // }
    //
    //
    // console.log(this.state);

  }

  componentWillLoad() {
    console.log('componentWillLoad')
    this.resolver = loginService;

    onLogin(_ => {
      console.log('on login', this.screen_set)
      const {getAccount, getToken} = gigya;

      this.login.send({type:"RESOLVE" , result:{ profile: getAccount, token:getToken}})

      // loginService.onLogin(getAccount, getToken);

    });
  }

  private stateChange = (props) => {
    const {current} = props;
    this.state= current;
    this.interaction = select(current);
  };


  render() {
    return (

      <Host>
         {/*<p>*/}
         {/*  {this.state}*/}
         {/*</p>*/}
        {this.login &&
          <div>
            <xstate-service service={this.login} callback={this.stateChange} renderer={(_c, state, _s)=>{
              console.log(_s);
              console.log(state);
              console.log(_c);

              return   (<p>
                {/*{state?.name}*/}
                {JSON.stringify(state)}
                {JSON.stringify(_c)}

              </p>)
          }} />
          </div>}

      </Host>
      // <Host>
      //   {/*<gigya-screen screen_set={this.screen_set} start_screen={this.start_screen}></gigya-screen>*/}
      //
      // </Host>
    );
  }

  render1() {
    // if (this.state && this.state.matches("loading")) {
    //   console.log(this.state);
    //   const {showScreenSet} = useScreenSet();
    //
    //   showScreenSet({
    //     screenSet: this.screen_set,
    //     startScreen: this.start_screen
    //   });
    // }
    return (
      <Host>
        {/*<gigya-screen screen_set="Default-RegistrationLogin" start_screen="gigya-login-screen"></gigya-screen>*/}

        <TunnelService.Consumer>
          {({ login }) => {
            this.syncState(login)
            return <MachineStateTunnel.Provider  state={this.state}>
              <MachineStateTunnel.Consumer>
                {({ state }) => (
                  <gigya-screen screen_set="Default-ReAuthentication" start_screen="gigya-reauthentication-screen"></gigya-screen>
                )}
              </MachineStateTunnel.Consumer>

            </MachineStateTunnel.Provider>
          }

          }
        </TunnelService.Consumer>
      </Host>
    );
  }


}

 TunnelService.injectProps(GigyaLogin, ['login']);

