import { Knob } from "react-rotary-knob";

export const VolumeButton = ({ volume, setVolume, ...rest }) => {
  const handleOnChange = (e) => setVolume(e / 100);
  console.log(volume);
  return (
    <Knob
      onChange={handleOnChange}
      unlockDistance={0}
      rotateDegrees={120}
      preciseMode={false}
      {...rest}
    />
  );
};
