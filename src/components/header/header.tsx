import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="w-full h-24">
    </header>
  );
});
