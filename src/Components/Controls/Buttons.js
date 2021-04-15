import { tapeFF, tapePlay, tapeStop } from "../../assets/audio/FX";
import {
  ffOFF,
  ffON,
  nextOFF,
  nextON,
  playOFF,
  playON,
  previousOFF,
  previousON,
  stopOFF,
  stopON,
} from "../../assets/img/buttons";
import * as React from "react";
import { AudioFxButtonWrapper } from "../AudioFxButtonWrapper";

const DefaultTransportButton = ({
  alt,
  disabled,
  offSkin,
  onSkin,
  handleClick,
}) => {
  return (
    <button
      disabled={disabled}
      className="flex-1 cursor-pointer"
      style={{
        maxWidth: 80,
        filter: disabled ? "" : "drop-shadow(0 3px 0.3rem rgb(136, 136, 136)",
      }}
      onClick={handleClick}
    >
      <img src={disabled ? onSkin : offSkin} alt={alt} />
    </button>
  );
};

export const PlayBtn = ({ handleClick, isOn }) => (
  <AudioFxButtonWrapper
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapePlay}
  >
    <DefaultTransportButton
      disabled={isOn}
      onSkin={playON}
      offSkin={playOFF}
      alt="play button"
    />
  </AudioFxButtonWrapper>
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
  <AudioFxButtonWrapper
    onClick={handleClick}
    isOn={isOn}
    soundEffect={tapeStop}
  >
    <DefaultTransportButton
      disabled={isOn}
      onSkin={stopON}
      offSkin={stopOFF}
      alt="stop button"
    />
  </AudioFxButtonWrapper>
);
export const FastForwardBtn = ({ handleClick, isOn }) => (
  <AudioFxButtonWrapper onClick={handleClick} soundEffect={tapeFF} isOn={isOn}>
    <DefaultTransportButton
      disabled={isOn}
      onSkin={ffON}
      offSkin={ffOFF}
      alt="fast forward button"
    />
  </AudioFxButtonWrapper>
);
export const PreviousTrackBtn = ({ handleClick, isOn }) => (
  <AudioFxButtonWrapper
    onClick={handleClick}
    soundEffect={tapePlay}
    isOn={isOn}
  >
    <DefaultTransportButton
      disabled={isOn}
      onSkin={previousON}
      offSkin={previousOFF}
      alt="previous track button"
    />
  </AudioFxButtonWrapper>
);
export const NextTrackBtn = ({ handleClick, isOn }) => (
  <AudioFxButtonWrapper
    onClick={handleClick}
    soundEffect={tapePlay}
    isOn={isOn}
  >
    <DefaultTransportButton
      disabled={isOn}
      onSkin={nextON}
      offSkin={nextOFF}
      alt="next track button"
    />
  </AudioFxButtonWrapper>
);
