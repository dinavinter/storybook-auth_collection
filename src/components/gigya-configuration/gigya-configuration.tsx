import {Component, EventEmitter, Event, h, Prop, Listen} from '@stencil/core';
import { GigyaConfig} from "../store/gigya-config-store";
import {useGigyaSdk} from "../store/gigya-script-store";

@Component({
  tag: 'gigya-configuration',
  styleUrl: 'gigya-configuration.css',
  shadow: true,
})
export class GigyaConfiguration {
  @Prop() apiKey: string;
  @Prop() domain: string;
  @Event() applied: EventEmitter<GigyaConfig>;

  async handleSubmit(e) {
    e.preventDefault()
    console.log(this.apiKey);
    // send data to our backend
  }

  @Listen('click')
  showDebugUI( ) {
    console.log('click');
    this.applied.emit({apiKey:this.apiKey, domain:this.domain});
  }

  // handleApiKey(event) {
  //   this.apiKey = event.target.value;
  // }
  //
  // handleDomain(event) {
  //   this.domain = event.target.value;
  // }

  async componentWillLoad() {
    // this.apiKey =current?.apiKey;
    // this.domain =current?.domain;
    var {showDebugUI}=  await useGigyaSdk();
    showDebugUI();

  }

  render() {
    // const {apiKey, domain} = current || {};

    return (
      <div>
           <button
               type="button"
               onClick={_ => this.showDebugUI()}
             >
             showDebugUI
           </button>


      {/*<form onSubmit={(e) => this.handleSubmit(e)}>*/}
      {/*  <label>*/}
      {/*    Domain:*/}
      {/*    <ion-input value={this.domain}/>,*/}

      {/*    <input type="text" autoComplete={'gigya-domain'} defaultValue={this.current?.domain} value={this.domain}*/}
      {/*           onInput={(event) => this.handleDomain(event)}/>*/}
      {/*  </label>*/}
      {/*  <label>*/}
      {/*    Api Key:*/}
      {/*    <input type="text" autoComplete={'gigya-apiKey'} defaultValue={this.current?.apiKey} value={this.apiKey}*/}
      {/*           onInput={(event) => this.handleApiKey(event)}/>*/}
      {/*  </label>*/}
      {/*  <input type="submit" value="Submit"/>*/}
      {/*</form>*/}
        <slot></slot>
      </div>
    );
  }

}
// import { html } from 'lit-html';
 // import './button.css';

/**
 * Primary UI component for user interaction
 */
// export const GConfig = ({ apiKey, domain = 'gigya.com',  onApply }) => {
//
//   return html`
//     api Key: ${apiKey}
//     domain: ${domain}
//
//     <button
//       type="button"
//       @click=${onApply}
//     >
//       Apply
//     </button>
//   `;
// };
