import {Component, Host, h} from '@stencil/core';
import {Router} from '../../router'
import {Routes} from '../auth-ruter'

@Component({
  tag: 'router-link',
  styleUrl: 'router-link.css',
  shadow: true,
})
export class RouterLink {
  // @Prop() path: string;
  // @Prop() title: string;

  render() {
    return (
      <Host>

        <div class="sidenav">
          {Routes.map(route => {
            return (<a href={route.path} class={{'active': Router.activePath === route.path}}>{route.title}</a>
            )
          })}
        </div>
        )
        <div id="main">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
