import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './auth.scss?inline';
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  useStylesScoped$(styles);

  const logUser = $(() => {
    navigate('/home');
  });

  return (
    // TODO remove the height after populating the dialog
    <>
      <main class="h-screen w-full justify-center items-center flex flex-col">
        <div
          class="w-64 flex border-2 border-solid border-white rounded-2xl items-center justify-center global-color-grey h-80">
          {/*// TODO create actual login logic - use Google Login API*/}
          <button onClick$={logUser} class="p-4 border-2 border-solid border-white rounded-2xl">Log In</button>
        </div>
        <img class="mt-6" height="170" width="170" src="/assets/radio.png" alt="radio image" />
      </main>
    </>
  )
})