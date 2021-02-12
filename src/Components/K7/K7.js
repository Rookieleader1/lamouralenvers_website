import { useRef, useEffect, useState } from "react";
import { k7, wheel } from "../../assets/img";
import "./animation.css";
import { commands } from "../../globals";

const Wheel = ({
  height,
  offsetTop,
  offsetLeft,
  rotationSpeed,
  command,
  name,
  progressPercent,
}) => {
  const commandState = () => {
    if (command === commands.play || command === commands.fastForward)
      return "running";
    return "paused";
  };

  return (
    <>
      {/*<div*/}
      {/*  className="rounded-full bg-black"*/}
      {/*  style={{*/}
      {/*    maxHeight: 150,*/}
      {/*    height: `${progressPercent}%`,*/}
      {/*    maxWidth: 150,*/}
      {/*    width: `${progressPercent}%`,*/}
      {/*    position: "absolute",*/}
      {/*    // top: offsetTop,*/}
      {/*    // left: offsetLeft,*/}
      {/*  }}*/}
      {/*/>*/}
      <img
        src={wheel}
        alt={name}
        id={name}
        style={{
          objectFit: "contain",
          height: height,
          position: "absolute",
          top: offsetTop,
          left: offsetLeft,
          animationName: "spin",
          animationDuration: `${rotationSpeed}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationPlayState: commandState(),
        }}
      />
    </>
  );
};

const Wheels = ({
  k7Height,
  relativeHeight,
  rotationSpeed,
  command,
  progressPercent,
}) => (
  <div
    style={{
      height: k7Height,
      position: "absolute",
      top: 0,
      width: "100%",
    }}
  >
    <Wheel
      height={relativeHeight}
      offsetLeft="23.5%"
      offsetTop="36%"
      rotationSpeed={rotationSpeed}
      command={command}
      name="k7_wheel_left"
      progressPercent={progressPercent}
    />
    <Wheel
      height={relativeHeight}
      offsetLeft="64.5%"
      offsetTop="36%"
      rotationSpeed={rotationSpeed}
      command={command}
      name="k7_wheel_right"
      progressPercent={100 - progressPercent}
    />
  </div>
);

const K7 = ({ command, progressPercent }) => {
  const [k7Height, setK7Height] = useState(0);
  const [relativeScale, setRelativeScale] = useState(0);
  const [tapeSpeed, setTapeSpeed] = useState(1);
  const k7ref = useRef();

  const calculateRelativeScale = (naturalHeight, currentHeight) => {
    // given natural height and current height, return shrinkage in percent
    setRelativeScale((currentHeight / naturalHeight) * 100);
  };

  useEffect(() => {
    if (k7Height !== k7ref.current.height) setK7Height(k7ref.current.height);
    if (k7ref?.current) {
      calculateRelativeScale(k7ref.current.naturalHeight, k7Height);
    }
  }, [k7ref, k7ref.current, k7Height]);

  useEffect(() => {
    // set the tape speed regarding which command is active
    if (tapeSpeed !== 1 && command === commands.play) setTapeSpeed(1);
    else if (tapeSpeed !== 3 && command === commands.fastForward)
      setTapeSpeed(0.3);
  }, [tapeSpeed, command]);

  return (
    <div style={{ width: "90%", maxWidth: 500 }} className="relative m-auto">
      <img
        src={k7}
        ref={k7ref}
        alt="k7"
        style={{
          objectFit: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      />
      <Wheels
        k7Height={k7Height}
        relativeHeight={relativeScale}
        rotationSpeed={tapeSpeed}
        command={command}
        progressPercent={progressPercent}
      />
    </div>
  );
};

export default K7;
