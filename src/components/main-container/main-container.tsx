import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return(
      <div class="p-20">
        <Slot/>
      </div>
  )
})