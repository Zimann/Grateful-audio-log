import { component$, useStylesScoped$ } from "@builder.io/qwik";
import MainContainer from "~/components/main-container/main-container";
import styles from './record-log.scss?inline';
import AudioRecorder from "~/components/audio-recorder/audio-recorder";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <MainContainer>
      <AudioRecorder/>
    </MainContainer>
  )
});