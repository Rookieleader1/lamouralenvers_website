import { useState, useRef } from "react";
import { commands, playlist } from "../globals";
import { Playlist } from "./Playlist";
import ReactPlayer from "react-player";
import { Controls } from "./Controls/Controls";
import K7 from "./K7/K7";
import heartLogo from "../img/heart.png";

const MainLogo = () => (
  <img
    src={heartLogo}
    alt="logo coeur"
    className="py-3"
    style={{ width: 150, margin: "auto" }}
  />
);

const Header = () => (
  <header className="flex flex-col justify-center items-center min-w-full px-3">
    <MainLogo />
    <div>
      <h1 className="text-3xl font-extrabold">L'AMOUR À L'ENDROIT</h1>
      <div className="flex flex-col items-end text-sm font-medium">
        <p>
          SMD{" "}
          <span className="text-xs font-normal">(Sans Maison de Disque)</span>
        </p>
        <p>lamouralendroit@aol.com</p>
        <p>0611766489</p>
      </div>
    </div>
    <p className="text-center my-3 text-xs">
      Quand le rap passe à l'âge adulte <br />
      cela donne un album aussi décalé qu'une K7 en 2021!
    </p>
  </header>
);

const AudioPlayer = () => {
  const [playingTrack, setPlayingTrack] = useState(playlist[0]);
  const [command, setCommand] = useState(commands.stop);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioPlayerRef = useRef(undefined);
  const [volume, setVolume] = useState(100);

  return (
    <div className="flex flex-col justify-around">
      <Header />
      <ReactPlayer
        playing={playing}
        url={playingTrack?.url}
        ref={audioPlayerRef}
        onError={(e) => console.error(e)}
        playbackRate={playbackRate}
        // volume={volume}
        width={0}
        height={0}
      />
      <K7 playing={playing} command={command} />
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
        volume={volume}
        setVolume={setVolume}
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
