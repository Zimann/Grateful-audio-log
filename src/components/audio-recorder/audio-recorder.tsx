import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./audio-recorder.scss?inline";
import type { AudioRecorderStore } from "~/routes/stores/models/store-models";
import { AudioRecorderContext } from "~/root";

export default component$(() => {
  useStylesScoped$(styles);

  const recordingContext: AudioRecorderStore = useContext(AudioRecorderContext);
  const { recordingTriggered } = recordingContext;

  // TODO finesse Media Stream API
  const initiateRecording = $(() => {
    //TODO Check the recording state & toggle stop and play modes

    // changes the state (from the AudioRecorderStore) across all parts that have the same parent component
    recordingContext.recordingTriggered = !recordingContext.recordingTriggered;

    console.log(recordingContext.recordingTriggered);
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
        { recordingTriggered ? (<i class="fa fa-pause"></i>) : (<i class="hover:cursor-pointer fa fa-microphone"></i>)}
      </button>
      <span>Record Log</span>
    </>
  );
});