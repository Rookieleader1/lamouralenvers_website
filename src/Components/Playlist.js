import { commands, playlist } from "../globals";
import playerBgImage from "../assets/img/playlist_bg.png";
import { AudioFxButtonWrapper } from "./AudioFxButtonWrapper";
import { trackSelect } from "../assets/audio/FX";

const trackBgColor = "rgba(105, 132, 64, 0.3)";

const TrackSelector = ({ name, playing, trackIndex, handleClick }) => (
  <button
    className={`w-full mb-1 pl-3 last:mb-0 text-left ${
      playing ? "text-red-600" : ""
    }`}
    style={{ background: trackBgColor }}
    onClick={handleClick}
  >
    {`${trackIndex}/ ${name}`}
  </button>
);

const Track = ({
  track,
  setPlayingTrack,
  isPlaying,
  setPlaying,
  setCommand,
  trackIndex,
}) => {
  const handleClick = () => {
    setPlayingTrack(track);
    setCommand(commands.play);
    setPlaying(true);
  };

  return (
    <AudioFxButtonWrapper
      isOn={isPlaying}
      onClick={handleClick}
      soundEffect={trackSelect}
    >
      <TrackSelector
        playing={isPlaying}
        trackIndex={trackIndex}
        name={track.name}
      />
    </AudioFxButtonWrapper>
  );
};

const SideTracks = ({
  array,
  setPlayingTrack,
  setPlaying,
  setCommand,
  playingTrack,
  title,
}) => {
  return (
    <div className="flex-1 mr-1 last:mr-0">
      <p className="mb-1 pl-1" style={{ background: trackBgColor }}>
        {title}
      </p>
      {array.map((track, index) => (
        <Track
          key={index}
          trackIndex={index + 1}
          name={track.toString()}
          track={track}
          setPlayingTrack={setPlayingTrack}
          setPlaying={setPlaying}
          setCommand={setCommand}
          isPlaying={track.name === playingTrack.name}
        />
      ))}
    </div>
  );
};

export const Playlist = ({
  setPlayingTrack,
  playingTrack,
  setPlaying,
  setCommand,
}) => {
  const cutAtIndex = Math.ceil(playlist.length / 2);
  const sideA = playlist.slice(0, cutAtIndex);
  const sideB = playlist.slice(cutAtIndex, playlist.length);
  return (
    <div
      className="relative flex justify-around p-1 border-2 border-gray-700 rounded my-3 text-xs text-green-900 shadow-inner font-ledCalculator"
      style={{
        width: "90%",
        maxWidth: "500px",
        backgroundImage: `url(${playerBgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SideTracks
        playingTrack={playingTrack}
        setCommand={setCommand}
        setPlayingTrack={setPlayingTrack}
        setPlaying={setPlaying}
        array={sideA}
        title="SIDE A"
      />
      <SideTracks
        playingTrack={playingTrack}
        setCommand={setCommand}
        setPlayingTrack={setPlayingTrack}
        setPlaying={setPlaying}
        array={sideB}
        title="SIDE B"
      />
    </div>
  );
};
