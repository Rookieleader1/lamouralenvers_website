import { useState, useRef } from "react";
import { commands, playlist } from "../globals";
import { Playlist } from "./Playlist";
import ReactPlayer from "react-player";
import { Controls } from "./Controls";
import K7 from "./K7/K7";

const SongInfos = ({ playingTrack }) => (
  <div className="flex bg-blue-400 p-3 rounded items-center justify-center">
    <span className="text-2xl">{playingTrack?.name}</span>
  </div>
);

const AudioPlayer = () => {
  const [playingTrack, setPlayingTrack] = useState(playlist[0]);
  const [command, setCommand] = useState(commands.stop);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioPlayerRef = useRef(undefined);

  // const { playing, setPlaying, setCurTime } = useAudioPlayer();

  return (
    <div className="flex flex-col justify-around bg-green-500">
      <ReactPlayer
        playing={playing}
        url={playingTrack?.url}
        ref={audioPlayerRef}
        onError={(e) => console.error(e)}
        playbackRate={playbackRate}
        width={0}
        height={0}
      />
      <K7 playing={playing} command={command} />
      <SongInfos playingTrack={playingTrack} />
      <Controls
        setPlaying={setPlaying}
        setPlayingTrack={setPlayingTrack}
        playingTrack={playingTrack}
        playing={playing}
        command={command}
        setCommand={setCommand}
        audioPlayerRef={audioPlayerRef}
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
      />
      <Playlist
        setPlayingTrack={setPlayingTrack}
        setPlaying={setPlaying}
        setCommand={setCommand}
      />
    </div>
  );
};

export default AudioPlayer;
