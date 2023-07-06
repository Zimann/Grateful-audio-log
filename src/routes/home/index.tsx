import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MainContainer from "~/components/main-container/main-container";
import { routeLoader$ } from "@builder.io/qwik-city";
// VERY IMPORTANT! import this from @apollo/client/core - otherwise it throws an error where the barrel file is trying to export react...
import { gql, InMemoryCache } from "@apollo/client/core";
import { ApolloClient } from "@apollo/client/core";

type User = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

// can use the requestEvent argument to access route params for example
// Runs when the route is hit - every time this is hit
export const useFakeJSON = routeLoader$(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
});

// Runs when the route is hit - every time this is hit
export const useGraphQlServerContent = routeLoader$(async () => {

  const GET_HELLO = gql`
      query {
          hello
          message {
              greeting
          }
      }
  `;

  const { data } = await apolloClient.query({query: GET_HELLO});

  console.log(data.message.greeting);

  return data.message.greeting;
});

export default component$(() => {


  const signal: Array<User> = useFakeJSON().value;
  const graphQLVal = useGraphQlServerContent().value;

  useVisibleTask$(() => {
    console.log(signal);
  });

  return (
    <>
      {/*TODO fill this with content on how to use the web page - create a  grid layout to fill the container*/}
      {/* TODO Populate this with dummy content from GraphQL queries*/}
      <p>{graphQLVal}</p>
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
