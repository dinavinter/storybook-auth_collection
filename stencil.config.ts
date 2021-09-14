import { Config } from '@stencil/core';
import {promises as fs} from "fs";
import { JsonDocs } from '@stencil/core/internal';

async function generateCustomElementsJson(docsData: JsonDocs) {
  const jsonData = {
    version: 1.2,
    tags: docsData.components.map((component) => ({
      name: component.tag,
      path: component.filePath,
      description: component.docs,

      attributes: component.props
        .filter((prop) => prop.attr)
        .map((prop) => ({
          name: prop.attr,
          type: prop.type,
          description: prop.docs,
          defaultValue: prop.default,
          required: prop.required,
        })),

      events: component.events.map((event) => ({
        name: event.event,
        description: event.docs,
      })),

      methods: component.methods.map((method) => ({
        name: method.name,
        description: method.docs,
        signature: method.signature,
      })),

      slots: component.slots.map((slot) => ({
        name: slot.name,
        description: slot.docs,
      })),

      cssProperties: component.styles
        .filter((style) => style.annotation === 'prop')
        .map((style) => ({
          name: style.name,
          description: style.docs,
        })),

      cssParts: component.parts.map((part) => ({
        name: part.name,
        description: part.docs,
      })),
    })),
  };

  await fs.writeFile(
    './custom-elements.json',
    JSON.stringify(jsonData, null, 2),
  );
}

export const config: Config = {
  namespace: 'gigya-auth-machine',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',

    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json'
    },
    {
      type: 'docs-custom',
      generator: generateCustomElementsJson
    },
    {
      type: 'www',

      serviceWorker: {
        // swDest: "build/sw.js",
        swSrc: "src/sw2.js",
        //  globPatterns: [
        //   '**/*.{js,css,json,html,ico,png}'
        // ],
      },
      collections: [{ name: '@stencil/router' }]

    }
  ],

};

