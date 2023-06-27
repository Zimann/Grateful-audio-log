import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './auth-dialog.scss?inline';
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  useStylesScoped$(styles);

  const logUser = $(() => {
    navigate('/demo/flower');
  });

  return (
    // TODO remove the height after populating the dialog
    <>
      <div class="flex border-2 border-solid border-white rounded-2xl w-64 items-center justify-center global-color-grey h-80">
        {/*// TODO create actual login logic - use Google Login API*/}
        <button onClick$={logUser} class="p-4 border-2 border-solid border-white rounded-2xl">Log In</button>
      </div>
      <img class="m-auto mt-6" height="170" width="170" src="/assets/radio.png" alt="logo image" />
    </>
  )
})