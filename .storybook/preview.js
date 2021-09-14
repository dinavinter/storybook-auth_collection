import {withGigyaProvider} from "../src/providers/gigya/configStore";
import {defineCustomElements} from '../dist/esm/loader';

defineCustomElements();


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    xstate: true,

  },
}

export const globalTypes = {
  provider: {
    name: 'provider',
    description: 'Auth Provider',
    defaultValue: 'test',
    toolbar: {
      icon: 'globe',
      items: [
        {value: 'test', right: 'test', title: 'Test'}
      ],
    },
  }
};

export const decorators = [withGigyaProvider];

