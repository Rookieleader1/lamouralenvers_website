import { playlist } from "../globals";

const FancyBtn = ({ onClick, isOn, disabled, ...props }) => {
  return (
    <input
      type="button"
      value={props.children.toString()}
      disabled={disabled}
      className={`bg-green-400 p-3 rounded mr-3 last:mr-0 w-24 
      ${isOn ? "mt-2 shadow-sm " : "shadow "} 
      ${disabled ? "opacity-25" : ""}`}
      onClick={onClick}
    />
  );
};
const PlayBtn = ({ handleClick, isOn }) => (
  <FancyBtn onClick={handleClick} isOn={isOn}>
    play
  </FancyBtn>
);
const PauseBtn = ({ handleClick, isOn }) => (
  <FancyBtn onClick={handleClick} isOn={isOn}>
    pause
  </FancyBtn>
);

// const StopBtn = ({ setCommand }) => (
//   <FancyBtn onClick={() => setCommand()}>stop</FancyBtn>
// );
// const FastForwardBtn = ({ setCommand }) => (
//   <FancyBtn onClick={() => setCommand()}>
//     Fast Forward
//   </FancyBtn>
// );
// const RewindBtn = ({ setCommand }) => (
//   <FancyBtn onClick={() => setCommand()}>Rewind</FancyBtn>
// );

export const Controls = ({
  setPlaying,
  setPlayingTrack,
  playingTrack,
  playing,
}) => {
  const handlePlay = () => {
    if (!playingTrack) setPlayingTrack(playlist[0]);
    setPlaying(true);
  };

  return (
    <div className="flex items-center justify-center p-3 bg-white">
      <PlayBtn handleClick={handlePlay} isOn={playing} />
      <PauseBtn handleClick={() => setPlaying(false)} isOn={!playing} />
      {/*<StopBtn setCommand={setCommand} />*/}
      {/*<FastForwardBtn setCommand={setCommand} />*/}
      {/*<RewindBtn setCommand={setCommand} />*/}
    </div>
  );
};
