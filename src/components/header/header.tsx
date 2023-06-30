import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="w-full flex items-center justify-center">
      <p>Action Area</p>
    </header>
  );
});
