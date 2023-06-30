import { component$, useStylesScoped$ } from "@builder.io/qwik";
import MainContainer from "~/components/main-container/main-container";
import styles from './record-log.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <MainContainer>
      <button class="mb-3" aria-description="Record Log button"></button>
      <span>Record Log</span>
    </MainContainer>
  )
});