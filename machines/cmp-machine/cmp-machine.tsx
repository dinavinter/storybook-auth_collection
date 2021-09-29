import { Component, Host, h } from '@stencil/core';
import * as klaro from 'klaro/dist/klaro'

const config = {
  groupByPurpose: false,
  translations: {
    en: {
      googleAnalytics: {
        title: "Google Analytics",
        description: "The analytics service ran by a most definitely non-evil company.",
      },
      purposes: {
        analytics: "Analytics",
        styling: "Styling",
      }
    }
  },

    services: [
    {
      name: "googleAnalytics",
      purposes: ["analytics"],

    },
    {
      name: "bootstrap",
      title: "Bootstrap (external resource)",
      description: "Example for embedding external stylesheets.",
      purposes: ["styling"],
    },
  ],
  callback: function(consent, service) {
    console.log(
      'User consent for service ' + service.name + ': consent=' + consent
    );
  },

};


@Component({
  tag: 'cmp-machine',
  styleUrl: 'cmp-machine.css',
  shadow: true,
})
export class CmpMachine {

  render() {
    return (
      <Host>
        klaro.
        <slot></slot>

        <button onClick={_=> klaro.show(config, true)}>show manager</button>
        <button onClick={_=> {
          klaro.getManager(config).resetConsents();
          klaro.show(config);
        }}>show manager</button>

      </Host>
    );
  }

}
