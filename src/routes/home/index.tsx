import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MainContainer from "~/components/main-container/main-container";
import { routeLoader$ } from "@builder.io/qwik-city";

type User = {
  userId: number,
  id: number,
  title: string,
  body: string
}
// can use the requestEvent argument to access route params for example
export const useFakeJSON = routeLoader$(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
});

export default component$(() => {
  const signal: Array<User> = useFakeJSON().value;

  useVisibleTask$(() => {
    console.log(signal);
  });
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
