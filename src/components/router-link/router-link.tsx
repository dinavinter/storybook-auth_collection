import {Component, Host, h, EventEmitter, Event, Listen, Element, State} from '@stencil/core';
import {Router} from '../../router'
import {AuthScreens} from '../auth-ruter'

@Component({
  tag: 'router-link',
  styleUrl: 'router-link.css',
  shadow: true,
})
export class RouterLink {
  // @Prop() path: string;
  // @Prop() title: string;
  @Event() backgroundToggle: EventEmitter;
  @State() collapsed: boolean;
  // @Element() toasterDiv: HTMLElement;
  @Element() hostElement: HTMLElement;
  private sideBar: HTMLElement;

  constructor() {
    this.toggleBackground = this.toggleBackground.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
    this.sideBar = this.hostElement.querySelector('.side-menu');

  }
  menuToggle(e) {
    console.log('Background toggled menu', e);
    this.backgroundToggle.emit(e);
  }
  showToast() {
    this.sideBar.style.display = 'block';
  };
   openNav() {
    this.sideBar.style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
   closeNav() {
     this.sideBar.style.width = "0";
  }

  @Listen('backgroundToggle')
  toggleBackground(e) {

    console.log('recieved event', e);
    this.collapsed= !this.collapsed;
    this.sideBar.style.display = this.collapsed ? 'none': 'block';
  }

  render() {
    return (
      <Host>
        <nav >
          {AuthScreens.Enumerate().map(route => {
            return (<a href={route.path} class={{'active': Router.activePath === route.path}}>{route.title}</a>
            )
          })}
        </nav>
        {/*<div class="side-menu">*/}
        {/*  <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>*/}

        {/*  <button onClick={(e) => this.menuToggle(e)}> Collapse</button>*/}
        {/*  /!*<div class="menu-background" onClick={(e) => this.menuToggle(e)}>*!/*/}
        {/*  /!*</div>*!/*/}
        {/*  <div class="actual-menu sidenav" >*/}
        {/*    {AuthScreens.Enumerate().map(route => {*/}
        {/*      return (<a href={route.path} class={{'active': Router.activePath === route.path}}>{route.title}</a>*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<span onClick={this.closeNav}>open</span>*/}

        {/*<ion-split-pane contentId="main-content">*/}
        {/*  <ion-menu contentId="main-content">*/}

        {/*  </ion-menu>*/}
        {/*  <ion-content id="main-content">*/}
        {/*    <ion-nav />*/}
        {/*    <slot />*/}
        {/*  </ion-content>*/}
        {/*</ion-split-pane>*/}


      </Host>
    );
  }

}
