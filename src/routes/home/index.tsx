import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MainContainer from "~/components/main-container/main-container";

export default component$(() => {
  return (
    <>
      <MainContainer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Grateful Audio Log",
  meta: [
    {
      name: "description",
      content: "Audio Log Web app"
    }
  ]
};
