import { playlist } from "../globals";

const Track = ({ track, setPlayingTrack }) => (
  <button
    className="w-full bg-blue-500 rounded p-2 mb-1 last:mb-0"
    onClick={() => setPlayingTrack(track)}
  >
    {track.name}
  </button>
);

export const Playlist = ({ setPlayingTrack }) => (
  <div className="flex flex-col justify-center items-center p-3 bg-yellow-300">
    {playlist.map((track, index) => (
      <Track
        key={index}
        name={track.toString()}
        track={track}
        setPlayingTrack={setPlayingTrack}
      />
    ))}
  </div>
);
