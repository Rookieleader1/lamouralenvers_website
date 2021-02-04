import { commands, playlist } from "../globals";
import { tapeFF, tapePause, tapePlay, tapeStop } from "../audio/FX";
import { useEffect, useState } from "react";

const FancyBtn = ({ onClick, isOn, soundEffect, name }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioId = `${name}_audio`;
  const audio = document.getElementById(audioId);

  const handleClick = async () => {
    setAudioPlaying(true);
    onClick();
  };

  useEffect(() => {
    if (audio) {
      if (audioPlaying) {
        audio.play();
      } else {
        audio.currentTime = 0;
        audio.pause();
      }
    }
  }, [audioPlaying]);

  useEffect(() => {
    //when another button is not pressed, audio should not stop
    if (!isOn) {
      setAudioPlaying(false);
    }
  }, [isOn]);

  return (
    <>
      <audio id={audioId} src={(audioPlaying && soundEffect).toString()} />
      <input
        type="button"
        value={name}
        disabled={isOn}
        className={`bg-green-400 p-3 rounded mr-3 last:mr-0 w-24 cursor-pointer 
      ${isOn ? "mt-2 shadow-sm " : "shadow "} 
      ${isOn ? "opacity-75" : ""}`}
        onClick={handleClick}
      />
    </>
  );
};

const PlayBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapePlay}
    name="|>"
  />
);
const PauseBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapePause}
    name="||"
  />
);

const StopBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapeStop}
    name="[_]"
  />
);
const FastForwardBtn = ({ handleClick, isOn }) => (
  <FancyBtn onClick={handleClick} soundEffect={tapeFF} isOn={isOn} name=">>" />
);
// const RewindBtn = ({ setCommand }) => (
//   <FancyBtn onClick={() => setCommand()}>Rewind</FancyBtn>
// );

export const Controls = ({
  playing,
  setPlaying,
  setPlayingTrack,
  playingTrack,
  command,
  setCommand,
}) => {
  const audio = document.getElementById("audio");

  useEffect(() => {
    if (audio && audio.playbackRate !== 0 && command !== commands.fastForward)
      audio.playbackRate = 1;

    switch (command) {
      case commands.play:
        //if no track is currently playing, set the track to the first one
        if (!playingTrack) setPlayingTrack(playlist[0]);
        if (!playing) setPlaying(true);
        break;
      case commands.pause:
        if (playing) setPlaying(false);
        break;
      case commands.stop:
        if (playing) setPlaying(false);
        if (audio && audio.currentTime !== 0) audio.currentTime = 0;
        break;
      case commands.fastForward:
        if (audio) audio.playbackRate = 6;
        break;
      default:
        console.log("case not covered by switch");
    }
  }, [command]);

  return (
    <div className="flex items-center justify-center p-3 bg-white">
      <PlayBtn
        handleClick={() => setCommand(commands.play)}
        isOn={command === commands.play}
      />
      <PauseBtn
        handleClick={() => setCommand(commands.pause)}
        isOn={command === commands.pause}
      />
      <StopBtn
        handleClick={() => setCommand(commands.stop)}
        isOn={command === commands.stop}
      />
      <FastForwardBtn
        handleClick={() => setCommand(commands.fastForward)}
        isOn={command === commands.fastForward}
      />
      {/*<RewindBtn setCommand={setCommand} />*/}
    </div>
  );
};
