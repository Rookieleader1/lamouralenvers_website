import { useRef, useEffect, useState } from "react";
import { k7, wheel } from "../../assets/img";
import "./animation.css";
import { commands } from "../../globals";
import useResizeObserver from "use-resize-observer";

const Tape = ({ offsetLeft, progressPercent }) => (
  <div
    className="absolute flex justify-center items-center"
    style={{
      top: "45%",
      left: offsetLeft,
      height: 150,
      width: 150,
      transform: "translateY(-50%) translateX(-35%)",
    }}
  >
    <div
      className="bg-black rounded-full overflow-hidden "
      style={{
        height: `${progressPercent}%`,
        width: `${progressPercent}%`,
        minHeight: "70%",
        minWidth: "70%",
      }}
    />
  </div>
);

const Wheel = ({
  height,
  offsetTop,
  offsetLeft,
  rotationSpeed,
  command,
  name,
  progressPercent,
  rotationOffset = 0,
}) => {
  const commandState = () =>
    command === commands.play || command === commands.fastForward
      ? "running"
      : "paused";

  if (!height || height === 0) return null;

  return (
    <>
      <Tape offsetLeft={offsetLeft} progressPercent={progressPercent} />
      <div
        style={{
          transform: `rotate(${rotationOffset}deg)`,
          top: offsetTop,
          left: offsetLeft,
          position: "absolute",
        }}
      >
        <img
          src={wheel}
          alt={name}
          id={name}
          style={{
            objectFit: "contain",
            height: height,

            animationName: "spin",
            animationDuration: `${rotationSpeed}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationPlayState: commandState(),
          }}
        />
      </div>
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
    <div
      style={{
        height: "40%",
        width: "30%",
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        // -ms-transform: translate(-50%, -50%),
        transform: "translate(-50%, -50%)",
        background: "#959493",
      }}
    />

    <Wheel
      height={relativeHeight}
      offsetLeft="23.5%"
      offsetTop="36%"
      rotationSpeed={rotationSpeed}
      command={command}
      name="k7_wheel_left"
      progressPercent={100 - progressPercent / 3}
    />
    <Wheel
      height={relativeHeight}
      offsetLeft="64.5%"
      offsetTop="36%"
      rotationSpeed={rotationSpeed}
      command={command}
      name="k7_wheel_right"
      progressPercent={66.6 + progressPercent / 3}
      rotationOffset={90}
    />
  </div>
);

const K7 = ({ command, progressPercent }) => {
  const [relativeScale, setRelativeScale] = useState(0);
  const [tapeSpeed, setTapeSpeed] = useState(1);
  const k7ref = useRef();
  const { height = 1 } = useResizeObserver({ ref: k7ref });

  const calculateRelativeScale = (naturalHeight, currentHeight) => {
    // given natural height and current height, return shrinkage in percent
    setRelativeScale((currentHeight / naturalHeight) * 100);
  };

  useEffect(() => calculateRelativeScale(k7ref.current.naturalHeight, height), [
    height,
  ]);

  useEffect(() => {
    // set the tape speed regarding which command is active
    if (tapeSpeed !== 1 && command === commands.play) setTapeSpeed(1);
    else if (tapeSpeed !== 3 && command === commands.fastForward)
      setTapeSpeed(0.3);
  }, [tapeSpeed, command]);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: 500,
      }}
      className="relative m-auto"
    >
      <Wheels
        k7Height={height}
        relativeHeight={relativeScale}
        rotationSpeed={tapeSpeed}
        command={command}
        progressPercent={progressPercent}
      />
      <img
        src={k7}
        ref={k7ref}
        alt="k7"
        style={{
          objectFit: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
          position: "relative",
          zIndex: 10,
          // visibility: "hidden",
        }}
      />
    </div>
  );
};

export default K7;
