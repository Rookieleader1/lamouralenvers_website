import useSound from "use-sound";
import * as React from "react";
import { useEffect } from "react";

export const AudioFxButtonWrapper = ({
  onClick,
  isOn,
  soundEffect,
  ...props
}) => {
  const [play, { stop }] = useSound(soundEffect);

  useEffect(() => {
    if (!isOn) stop();
  }, [isOn, stop]);

  const handleClick = async () => {
    play();
    onClick();
  };
  return (
    <>
      {React.cloneElement(props.children, {
        isOn: isOn,
        handleClick: handleClick,
      })}
    </>
  );
};
