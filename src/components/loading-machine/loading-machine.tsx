import { Component, Host, h } from '@stencil/core';
// import {Machine} from "xstate";

// const machine = Machine({
//   initial: 'pre initialization',
//   states: {
//     loading: {
//       on: {
//         NEXT: 'loaded'
//       }
//     },
//     yellow: {
//       on: {
//         NEXT: 'red'
//       }
//     },
//     red: {
//       on: {
//         NEXT: 'green'
//       }
//     }
//   }
// });

@Component({
  tag: 'loading-machine',
  styleUrl: 'loading-machine.css',
  shadow: true,
})
export class LoadingMachine {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
