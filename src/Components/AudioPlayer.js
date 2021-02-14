import { useRef, useState } from "react";
import { commands, playlist } from "../globals";
import ReactPlayer from "react-player";
import { Controls } from "./Controls/Controls";
import K7 from "./K7/K7";
import heartLogo from "../assets/img/heart.png";
import DownloadButton from "./DllButton";
import StartModal from "./StartModal";

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
    <h1 className="text-3xl font-extrabold mb-6">L'AMOUR À L'ENDROIT</h1>
    <div className="flex">
      <DownloadButton />
      <div className="flex flex-col items-end text-sm font-medium ml-3">
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

const Footer = () => (
  <section
    className="text-center px-3 mb-6 m-auto text-sm"
    style={{ maxWidth: 500 }}
  >
    <p>
      Déjà plus d'un an que la terre s'est arrêté de tourner, que le monde se
      polarise et se replie sur lui même.
    </p>
    <p className="mb-3">ALORS SI ON SE DONNAIT UN PEU DE LOVE?</p>
    <p>
      L'amour dans le rap a trop longtemps été l'otage de niaiseries ou
      d'auteurs à l'eau de rose. Je propose de remettre l'essentiel au centre du
      Rapjeu.
    </p>
    <p className="mb-3">
      Dans un monde qui marche sur la tête, même l'amour est à l'envers.
      Laissez-vous surprendre par L'AMOUR A L'ENDROIT.
    </p>
    <p>
      A vous de jouer: un conseil, une idée,{" "}
      <span className="font-medium">
        UN MANAGEMENT, UN LABEL, DU PUBLISHING,
      </span>{" "}
      votre beau frère est Pascal Nègre ou juste l'envie qu'on partage ensemble
      un Raiders ...
    </p>
  </section>
);

const AudioPlayer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [playingTrack, setPlayingTrack] = useState(playlist[0]);
  const [command, setCommand] = useState(commands.stop);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progressPercent, setProgressPercent] = useState(0);
  const audioPlayerRef = useRef(undefined);

  return (
    <div className="flex flex-col justify-around">
      <StartModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Header />
      <ReactPlayer
        playing={playing}
        url={playingTrack?.url}
        ref={audioPlayerRef}
        onError={(e) => console.error(e)}
        playbackRate={playbackRate}
        onProgress={(e) => setProgressPercent(e.played * 100)}
        width={0}
        height={0}
      />
      <K7 command={command} progressPercent={progressPercent} />
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
      <Footer />
    </div>
  );
};

export default AudioPlayer;
