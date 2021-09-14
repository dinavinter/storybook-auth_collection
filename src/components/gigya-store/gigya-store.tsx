import {Component, Host, Prop, State, Watch, Listen } from '@stencil/core';
 import { toastController } from '@ionic/core';
import {loadGigya} from "../store/gigya-config-store";
import {h} from "@stencil/core";

// import {createStore} from "@stencil/store";

//  class LoadingIndicator {
//   @Prop() activated: boolean;
//   @State() busy: boolean;
//
//   @Watch('activated')
//   watchPropHandler(newValue: boolean, _: boolean) {
//     console.log('The new value of activated is: ', newValue);
//   }
//
//   @Watch('busy')
//   watchStateHandler(newValue: boolean, _: boolean) {
//     console.log('The new value of busy is: ', newValue);
//   }
// }

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

  @Component({
    tag: 'gigya-store',
    styleUrl: 'gigya-store.css',
    shadow: true,
  })
  export class GigyaStore {

    @Prop() apiKey: string;
    @Prop() domain: string;
    @State() gigya: {};
    @State() loading: boolean;

    @Listen('onGigyaServiceReady' , )
    gigyaServiceHandler() {
      console.log('onGigyaServiceReady' );
    }
    getUrl() {
      return `https://cdns.${this.domain}/js/gigya.js?apikey=${this.apiKey}`;
    }

    @State() script: HTMLScriptElement;
    async toast(_){
        const toast = await toastController.create({
          message: "New version available.",
          buttons: [{ text: 'Reload', role: 'reload' }],
          duration: 0
        });

        await toast.present();

       }

    loadScript() : Promise<HTMLScriptElement>{
      return new Promise((resolve) => {
        console.log("loading script " + this.getUrl());
        this.script = document.createElement('script');
        this.script.id = this.apiKey;
        this.script.src = this.getUrl();
        document.head.appendChild(this.script);
        resolve(this.script);
      });
    }

    // gigyaReady() {
    //   return new Promise((resolve) => {
    //     onChange('gigya', _ => {
    //       console.log('loaded ');
    //       resolve(state.gigya)
    //
    //     })
    //   });
    // }


    @Watch('apiKey')
    async watchApiKeyHandler(newValue: string, oldValue: string) {
      // document.head.removeChild(this.script);
      // state.gigya = undefined;
      // delete window.gigya;
      if(newValue !== oldValue)
      this.gigya= await loadGigya(newValue , this.domain);

      console.log('The new value of apikey is: ', newValue);
    }
    @Watch('domain')
    async watchDomainHandler(newValue: string, oldValue: string) {
      // document.head.removeChild(this.script);
      // state.gigya = undefined;
      // delete window.gigya;
      if(newValue !== oldValue)

        this.gigya= await loadGigya(this.apiKey , newValue);

      console.log('The new value of domain is: ', newValue);
    }

    async componentDidLoad() {
      console.log("componentDidLoad" + this.apiKey)


      // this.gigya= await loadGigya(this.apiKey , this.domain);

    }

    @Listen("swUpdate", { target: 'window' })
    async onServiceWorkerUpdate() {
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration?.waiting) {
        console.log("no registration waiting")
        // If there is no waiting registration, this is the first service
        // worker being installed.
        return;
      }

      const toast = await toastController.create({
        message: "New version available.",
        buttons: [{ text: 'Reload', role: 'reload' }],
        duration: 0
      });

      await toast.present();

      const { role } = await toast.onWillDismiss();

      if (role === 'reload') {
        registration.waiting.postMessage("skipWaiting");
      }
    }

    async componentWillLoad() {
      check();
      console.log("componentWillLoad" + this.apiKey)
      if(this.apiKey) {
        await loadGigya(this.apiKey, this.domain);
        console.log("after load: " +this.apiKey);
      }
      if ('serviceWorker' in navigator && location.protocol !== 'file:') {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('../sw.js')
            .then(function (reg) {
              reg.onupdatefound = function () {
                var installingWorker = reg.installing;
                installingWorker.onstatechange = function () {
                  if (installingWorker.state === 'installed') {
                    window.dispatchEvent(new Event('swUpdate'))
                  }
                }
              }
            })
            .catch(function (err) {
              console.error('service worker error', err)
            });
        });
      }

      if ('serviceWorker' in navigator) {
        console.log("'serviceWorker' in navigator")
        // await navigator.serviceWorker.register('../sw.js')

        navigator.serviceWorker
          .getRegistration()
          .then(registration => {
            if (!registration?.waiting) {
              console.log("no registration waiting")
              // If there is no waiting registration, this is the first service
              // worker being installed.
              return;
            }
            if (registration?.active) {
              navigator.serviceWorker.addEventListener(
                'controllerchange',
                () => window.location.reload()
              );
            }
          })
      }
      else {
        console.log("'serviceWorker' NOT in navigator")

      }

      // if(!state.gigya || this.apiKey !== state.gigya.apiKey)
      // {
      //   this.loading = true;
      //   this.script =await this.loadScript();
      //   this.gigya = await this.gigyaReady();
      //   this.loading = false;
      //   console.log("gigya loaded " + this.getUrl());
      //   console.log(  state.gigya);
      //
      // }
      // else {
      //   console.log("gigya already loaded "  );
      //   console.log(state.gigya );
      //
      // }

    }


    render() {
      return (
        <Host>
          {/*<iframe src={'../index.html'}>*/}
          <slot></slot>
            {/*<button onClick={this.toast} />*/}

          {/*</iframe>*/}
          {/*<LoadingIndicator />*/}
        </Host>
      );
    }

  }


