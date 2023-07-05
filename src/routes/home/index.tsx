import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MainContainer from "~/components/main-container/main-container";

export default component$(() => {
  return (
    <>
      {/*TODO fill this with content on how to use the web page - create a  grid layout to fill the container*/}
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
