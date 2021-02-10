import { useEffect, useState, useRef } from "react";
import { commands, playlist } from "../globals";
import { tapeFF, tapePause, tapePlay, tapeStop } from "../audio/FX";
import ReactPlayer from "react-player";

const FancyBtn = ({ onClick, isOn, soundEffect, name }) => {
  const [audioFxPlaying, setAudioFxPlaying] = useState(false);
  const audioRef = useRef(undefined);

  const handleClick = async () => {
    setAudioFxPlaying(true);
    onClick();
  };

  useEffect(() => {
    //when another button is not pressed, audio should not stop
    if (!isOn) {
      setAudioFxPlaying(false);
    }
  }, [isOn]);

  const resetAudio = () => {
    // we stop the playing and reset play head to start of file
    if (audioRef?.current) {
      setAudioFxPlaying(false);
      audioRef?.current?.seekTo(0);
    }
  };

  return (
    <>
      <ReactPlayer
        ref={audioRef}
        url={soundEffect}
        playing={audioFxPlaying}
        onPause={resetAudio}
        onEnded={resetAudio}
        onError={(e) => console.error(e)}
        width={0}
        height={0}
      />
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

export const Controls = ({
  playing,
  setPlaying,
  setPlayingTrack,
  playingTrack,
  command,
  setCommand,
  audioPlayerRef,
  playbackRate,
  setPlaybackRate,
}) => {
  useEffect(() => {
    if (playbackRate !== 0 && command !== commands.fastForward)
      setPlaybackRate(1);

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
        const currentTime = audioPlayerRef?.current?.getCurrentTime();
        if (!!currentTime && currentTime !== 0)
          audioPlayerRef.current.seekTo(0);
        break;
      case commands.fastForward:
        setPlaybackRate(6);
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
    </div>
  );
};
