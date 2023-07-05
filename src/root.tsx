import { component$, createContextId, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './styles/global.scss';
import type { AudioRecorderStore } from "~/routes/stores/models/store-models";

// The contexts have to be declared at a parent/root level
export const AudioRecorderContext = createContextId<AudioRecorderStore>('AudioRecorderContext');
export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const store = useStore<AudioRecorderStore>({
    recordingTriggered: false,
  });

  useContextProvider(AudioRecorderContext, store);
  useVisibleTask$(() => {
    setTimeout(() => {
      console.log('This runs on the client');
      console.log('recording triggered value: ',store.recordingTriggered);
    }, 5000);
  })

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <title>Grateful Log App</title>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
