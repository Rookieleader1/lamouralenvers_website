import { playlist } from "../globals";
import { useState } from "react";
import { Playlist } from "./Playlist";
import useAudioPlayer from "../hooks/useAudioPlayer";

const FancyBtn = ({ onClick, isOn, ...props }) => {
  return (
    <button
      className={`bg-green-400 p-3 rounded mr-3 last:mr-0 w-24 ${
        isOn ? "mt-2 shadow-sm " : "shadow"
      }`}
      onClick={onClick}
    >
      {props.children}
    </button>
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

const Controls = ({ setPlaying, playing }) => (
  <div className="flex flex-1 items-center justify-center py-3 bg-white">
    <PlayBtn handleClick={() => setPlaying(true)} isOn={playing} />
    <PauseBtn handleClick={() => setPlaying(false)} isOn={!playing} />
    {/*<StopBtn setCommand={setCommand} />*/}
    {/*<FastForwardBtn setCommand={setCommand} />*/}
    {/*<RewindBtn setCommand={setCommand} />*/}
  </div>
);

function SongInfos({ playingTrack }) {
  return (
    <div className="flex flex-1 bg-blue-400 p-3 rounded items-center justify-center">
      <span className="text-2xl">{playingTrack?.name}</span>
    </div>
  );
}

const AudioPlayer = () => {
  const [playingTrack, setPlayingTrack] = useState(playlist[0]);
  const { playing, setPlaying } = useAudioPlayer();

  return (
    <div className="flex flex-col bg-red-400 m-auto h-screen">
      <audio id="audio" src={playingTrack?.url} />
      <SongInfos playingTrack={playingTrack} />
      <Controls setPlaying={setPlaying} playing={playing} />
      <Playlist setPlayingTrack={setPlayingTrack} />
    </div>
  );
};

export default AudioPlayer;
