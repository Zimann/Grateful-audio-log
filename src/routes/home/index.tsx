import { $, component$, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
// VERY IMPORTANT! import this from @apollo/client/core - otherwise it throws an error where the barrel file is trying to export react...
import { InMemoryCache } from "@apollo/client/core";
import { ApolloClient } from "@apollo/client/core";
import { GET_INTRO } from "~/graphql-client/queries";
import type { HomeData, HomeDescription } from "../../../server/graphql/models";
import styles from './home.scss?inline';
import { serverConfig } from "~/graphql-client/server-config";

const apolloClient = new ApolloClient({
  uri: serverConfig.url + serverConfig.port,
  cache: new InMemoryCache()
});

// can use the requestEvent argument to access route params for example
// Runs when the route is hit - every time this is hit
export const useGraphQlServerContent = routeLoader$(async () => {

  const { data } = await apolloClient.query({query: GET_INTRO});

  return data;
});

export const navigateToPage = $((routeName: string, navFn: Function) => {
  navFn(routeName);
})

export default component$(() => {
  useStylesScoped$(styles);
  const navigate = useNavigate();
  const graphQLVal: HomeData = useGraphQlServerContent().value;

  useVisibleTask$(() => {
    console.log(graphQLVal);
  });

  return (
      <main>
        <h2 class="p-12">
          {graphQLVal.homeIntro.headline}
          <hr class="mt-3"/>
        </h2>
        <div class="grid gap-6 md:grid-cols-2 grid-cols-1 text-center grid-flow-row md:grid-flow-col">
          {graphQLVal.homeIntro.descriptions.map((description: HomeDescription) => (
            <div class="col-content relative" key={description.id}>
              <img class="m-auto mb-5 rounded-2xl" height="100" width="200" src="/assets/dummy_200x100_000000_bfc5be.png" alt="placeholder image" />
              <p class="font-bold">
                {description.title}
              </p>
              <p class="pt-3.5">{description.functionality}</p>
              <button onClick$={() => navigateToPage(description.route, navigate)} class="absolute bottom-0 w-fit p-3.5 rounded-3xl">{description.action}</button>
            </div>
          ))}
          <p></p>
        </div>
      </main>
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
