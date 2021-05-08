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
    <div>
      <h1 className="text-3xl font-extrabold mb-6">L'AMOUR À L'ENDROIT</h1>
      <div className="flex justify-between">
        <DownloadButton />
        <div className="flex flex-col items-end text-sm font-medium ml-3">
          <p>
            ERMD{" "}
            <span className="text-xs font-normal">
              (En RECHERCHE de Maison de Disque)
            </span>
          </p>
          <p>lamouralendroit@aol.com</p>
          <p>James : 0611766489</p>
        </div>
      </div>
    </div>
    <p className="text-center my-3 text-sm">
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
      polarise et se replie sur lui-même.
    </p>
    <p className="mb-3">ALORS SI ON SE DONNAIT UN PEU DE LOVE?</p>
    <p>
      L'amour dans le rap a trop longtemps été l'otage de niaiseries ou
      d'auteurs à l'eau de rose. Je propose de remettre l'essentiel au centre du
      Rapjeu.
    </p>
    <p>
      Dans un monde qui marche sur la tête, même l'amour est à l'envers.
      Laissez-vous surprendre par
    </p>
    <p className="my-3">L'AMOUR A L'ENDROIT.</p>
    <p>À vous de jouer: un conseil, une idée, </p>
    <p className="font-medium">UN MANAGEMENT, UN LABEL, DU PUBLISHING,</p>
    <p>
      votre beau frère est Pascal Nègre ou juste l'envie qu'on partage ensemble
      un Raiders ...
    </p>
    <div className="mt-6 hover:bg-blue-300 rounded p-1">
      <a href="https://www.youtube.com/c/JAMESDELLECKAMOUR" target="_blank">
        Pour en savoir plus sur l'artiste, c'est par ici
      </a>
    </div>
  </section>
);

const AudioPlayer = ({
  playing,
  playingTrack,
  audioPlayerRef,
  playbackRate,
  command,
  onEnded,
}) => {
  const [progressPercent, setProgressPercent] = useState(0);
  return (
    <>
      <ReactPlayer
        playing={playing}
        url={playingTrack?.url}
        ref={audioPlayerRef}
        onError={(e) => console.error(e)}
        playbackRate={playbackRate}
        onProgress={(e) => setProgressPercent(e.played * 100)}
        width={0}
        height={0}
        onEnded={onEnded}
      />
      <K7 command={command} progressPercent={progressPercent} />
    </>
  );
};

const AudioPlayerPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [playingTrack, setPlayingTrack] = useState(playlist[0]);
  const [command, setCommand] = useState(commands.stop);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioPlayerRef = useRef(undefined);

  return (
    <div className="flex flex-col justify-around">
      <StartModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        onClickCb={() => setCommand(commands.play)}
      />
      <Header />
      <AudioPlayer
        playingTrack={playingTrack}
        command={command}
        playbackRate={playbackRate}
        audioPlayerRef={audioPlayerRef}
        playing={playing}
        onEnded={() => setCommand(commands.nextTrack)}
      />
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

export default AudioPlayerPage;
