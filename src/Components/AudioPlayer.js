import { playlist } from "../globals";
import { useEffect, useState } from "react";
import { Playlist } from "./Playlist";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { Controls } from "./Controls";

const SongInfos = ({ playingTrack }) => (
  <div className="flex bg-blue-400 p-3 rounded items-center justify-center">
    <span className="text-2xl">{playingTrack?.name}</span>
  </div>
);

const AudioPlayer = () => {
  const [playingTrack, setPlayingTrack] = useState();
  const { playing, setPlaying } = useAudioPlayer();

  return (
    <div className="flex flex-col justify-around m-auto">
      <audio id="audio" src={playingTrack?.url} />
      <SongInfos playingTrack={playingTrack} />
      <Controls
        setPlaying={setPlaying}
        setPlayingTrack={setPlayingTrack}
        playingTrack={playingTrack}
        playing={playing}
      />
      <Playlist setPlayingTrack={setPlayingTrack} />
    </div>
  );
};

export default AudioPlayer;
