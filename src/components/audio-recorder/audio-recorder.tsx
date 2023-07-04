import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./audio-recorder.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  // TODO finesse Media Stream API
  const initiateRecording = $(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((audioStream: MediaStream) => {
      //TODO Store Blob Audio stream in store, to access it in other views
      console.log(audioStream);
      const mediaRecorder: MediaRecorder = new MediaRecorder(audioStream);
      console.log(mediaRecorder);
    });
  });

  return (
    <>
      <button onClick$={initiateRecording} class="mb-3" aria-description="Record Log button">
        <i class="hover:cursor-pointer fa fa-microphone"></i>
      </button>
      <span>Record Log</span>
    </>
  );
});