import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();

  useVisibleTask$(() => {
    // TODO Build logic for this - boolean placeholder for now
    const authenticated = false;
    if (authenticated) {
      navigate('/home');
    } else {
      navigate('/auth');
    }
  });
  return(
    <></>
  );
})