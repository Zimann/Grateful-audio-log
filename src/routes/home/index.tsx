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
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
