import { commands } from "../globals";

const FancyBtn = ({ onClick, ...props }) => (
  <button className="bg-green-400 p-3 rounded mr-3 last:mr-0" onClick={onClick}>
    {props.children}
  </button>
);

const PlayBtn = ({ setCommand }) => (
  <FancyBtn onClick={() => setCommand(commands.play)}>play</FancyBtn>
);
const PauseBtn = ({ setCommand }) => (
  <FancyBtn onClick={() => setCommand(commands.pause)}>pause</FancyBtn>
);
const StopBtn = ({ setCommand }) => (
  <FancyBtn onClick={() => setCommand(commands.stop)}>stop</FancyBtn>
);
const FastForwardBtn = ({ setCommand }) => (
  <FancyBtn onClick={() => setCommand(commands.fastForward)}>
    Fast Forward
  </FancyBtn>
);
const RewindBtn = ({ setCommand }) => (
  <FancyBtn onClick={() => setCommand(commands.rewind)}>Rewind</FancyBtn>
);

const AudioPlayer = ({ command, setCommand }) => {
  return (
    <div className="flex flex-col bg-red-400 m-auto flex-1">
      <span>{command}</span>
      <div>
        <PlayBtn setCommand={setCommand} />
        <PauseBtn setCommand={setCommand} />
        <StopBtn setCommand={setCommand} />
        <FastForwardBtn setCommand={setCommand} />
        <RewindBtn setCommand={setCommand} />
      </div>
    </div>
  );
};

export default AudioPlayer;
