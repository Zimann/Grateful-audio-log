import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ControlSidePanel } from "~/components/control-side-panel/control-side-panel";

export default component$(() => {
  return (
    <>
      <ControlSidePanel></ControlSidePanel>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Grateful Audio Log',
  meta: [
    {
      name: 'description',
      content: 'Audio Log Web app',
    },
  ],
};
