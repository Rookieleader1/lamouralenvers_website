import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

export const VolumeButton = ({ volume, setVolume, ...rest }) => {
  const handleOnChange = (e) => setVolume(Math.floor(e));
  return (
    <Knob
      value={volume}
      onChange={handleOnChange}
      rotateDegrees={-135}
      preciseMode={false}
      clampMin={0}
      clampMax={270}
      skin={skins.s8}
      {...rest}
    />
  );
};
