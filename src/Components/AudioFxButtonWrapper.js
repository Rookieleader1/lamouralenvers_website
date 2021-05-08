import useSound from "use-sound";
import * as React from "react";
import { useEffect } from "react";

export const AudioFxButtonWrapper = ({
  onClick,
  isOn,
  soundEffect,
  volume = 1,
  ...props
}) => {
  const [play, { stop }] = useSound(soundEffect, { volume: volume });

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
