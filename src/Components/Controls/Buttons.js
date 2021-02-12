import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { tapeFF, tapePause, tapePlay, tapeStop } from "../../audio/FX";
import {
  playON,
  playOFF,
  stopOFF,
  stopON,
  ffON,
  ffOFF,
  previousON,
  previousOFF,
  nextON,
  nextOFF,
} from "../../img/buttons";

const FancyBtn = ({ onClick, isOn, soundEffect, alt, onSkin, offSkin }) => {
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
      <button
        // value={name}
        disabled={isOn}
        className="w-24 cursor-pointer"
        onClick={handleClick}
      >
        <img src={isOn ? onSkin : offSkin} alt={alt} />
      </button>
    </>
  );
};
export const PlayBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    isOn={isOn}
    onSkin={playON}
    offSkin={playOFF}
    soundEffect={tapePlay}
    alt="play button"
  />
);
// export const PauseBtn = ({ handleClick, isOn }) => (
//   <FancyBtn
//     onClick={handleClick}
//     isOn={isOn}
//     soundEffect={tapePause}
//     alt="pause button"
//   />
// );
export const StopBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapeStop}
    alt="stop button"
    onSkin={stopON}
    offSkin={stopOFF}
  />
);
export const FastForwardBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    soundEffect={tapeFF}
    isOn={isOn}
    alt="fast forward button"
    onSkin={ffON}
    offSkin={ffOFF}
  />
);
export const PreviousTrackBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    soundEffect={tapePlay}
    isOn={isOn}
    alt="previous track button"
    onSkin={previousON}
    offSkin={previousOFF}
  />
);
export const NextTrackBtn = ({ handleClick, isOn }) => (
  <FancyBtn
    onClick={handleClick}
    soundEffect={tapePlay}
    isOn={isOn}
    alt="next track button"
    onSkin={nextON}
    offSkin={nextOFF}
  />
);
