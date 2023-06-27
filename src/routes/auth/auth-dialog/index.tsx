import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    // TODO remove the height after populating the dialog
    <>
    <img src="/assets/logo.png" alt="logo image" />
      <div>

      </div>
    <div class="flex border-2 border-solid border-white rounded-2xl w-64 items-center justify-center global-color-grey h-80">
      <h2>Dialog title</h2>
    </div>
    </>
  )
})