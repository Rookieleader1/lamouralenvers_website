import { commands, playlist } from "../globals";

const Track = ({
  track,
  setPlayingTrack,
  isPlaying,
  setPlaying,
  setCommand,
  trackIndex,
}) => (
  <button
    className={`w-full mb-1 pl-3 last:mb-0 text-left ${
      isPlaying ? "text-red-600" : ""
    }`}
    style={{ background: "#a4c15d" }}
    onClick={() => {
      setPlayingTrack(track);
      setCommand(commands.play);
      setPlaying(true);
    }}
  >
    {`${trackIndex}/ ${track.name}`}
  </button>
);

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
      <p className="mb-1 pl-1" style={{ background: "#a4c15d" }}>
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
      className="flex justify-around p-1 border-2 border-gray-700 rounded my-3 text-xs text-green-900 shadow-inner font-ledCalculator"
      style={{ width: "90%", maxWidth: "500px", background: "#cddc5a" }}
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
