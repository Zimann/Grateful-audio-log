import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
// VERY IMPORTANT! import this from @apollo/client/core - otherwise it throws an error where the barrel file is trying to export react...
import { InMemoryCache } from "@apollo/client/core";
import { ApolloClient } from "@apollo/client/core";
import { GET_INTRO } from "~/graphql-client/queries";
import type { HomeData } from "../../../server/graphql/models";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

// can use the requestEvent argument to access route params for example
// Runs when the route is hit - every time this is hit
export const useGraphQlServerContent = routeLoader$(async () => {

  const { data } = await apolloClient.query({query: GET_INTRO});

  return data;
});

export default component$(() => {
  const graphQLVal: HomeData = useGraphQlServerContent().value;

  useVisibleTask$(() => {
    console.log(graphQLVal);
  });

  return (
    <>
      {/*TODO fill this with content on how to use the web page - create a  grid layout to fill the container*/}
      {/* TODO Populate this with dummy content from GraphQL queries*/}
      <h1>{graphQLVal.homeIntro.headline}</h1>
      {/*<MainContainer />*/}
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
