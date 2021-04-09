import { useEffect, useState } from "react";
import { commands, playlist } from "../../globals";
import {
  FastForwardBtn,
  NextTrackBtn,
  PlayBtn,
  PreviousTrackBtn,
  StopBtn,
} from "./Buttons";
import { background } from "../../assets/img/buttons";
import { Playlist } from "../Playlist";
import findIndex from "lodash.findindex";

const TransportButtons = ({ command, setCommand }) => {
  return (
    <div
      className="flex items-center justify-center p-3 mx-3"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PlayBtn
        handleClick={() => setCommand(commands.play)}
        isOn={command === commands.play}
      />
      <FastForwardBtn
        handleClick={() => setCommand(commands.fastForward)}
        isOn={command === commands.fastForward}
      />
      <StopBtn
        handleClick={() => setCommand(commands.pause)}
        isOn={command === commands.pause} //This being pause instead of stop is weird but it is what is asked for
      />
      <PreviousTrackBtn
        handleClick={() => setCommand(commands.previousTrack)}
        isOn={command === commands.previousTrack}
      />
      <NextTrackBtn
        handleClick={() => setCommand(commands.nextTrack)}
        isOn={command === commands.nextTrack}
      />
    </div>
  );
};

export const Controls = ({
  playing,
  setPlaying,
  setPlayingTrack,
  playingTrack,
  command,
  setCommand,
  audioPlayerRef,
  playbackRate,
  setPlaybackRate,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState();
  useEffect(() => {
    setCurrentTrackIndex(
      findIndex(playlist, (o) => o.name === playingTrack.name)
    );
  }, [playingTrack]);

  useEffect(() => {
    if (playbackRate !== 0 && command !== commands.fastForward)
      setPlaybackRate(1);

    switch (command) {
      case commands.play:
        //if no track is currently playing, set the track to the first one
        if (!playingTrack) setPlayingTrack(playlist[0]);
        setPlaying(true);
        break;
      case commands.pause:
        if (playing) setPlaying(false);
        break;
      case commands.stop:
        if (playing) setPlaying(false);
        const currentTime = audioPlayerRef?.current?.getCurrentTime();
        if (!!currentTime && currentTime !== 0)
          audioPlayerRef.current.seekTo(0);
        break;
      case commands.fastForward:
        setPlaybackRate(6);
        if (!playing) setPlaying(true);
        break;
      case commands.previousTrack: {
        // if current track is the first in playlist, we just restart it
        const prevTrackIndex =
          currentTrackIndex === 0 ? 0 : currentTrackIndex - 1;

        setPlayingTrack(playlist[prevTrackIndex]);
        // we reset the track
        audioPlayerRef.current.seekTo(0);
        // we set a timeout to let the button be on for a while
        setTimeout(() => setCommand(commands.play), 100);
        break;
      }
      case commands.nextTrack: {
        // if the current track is the last in playlist, we go back to the start
        const nextTrackIndex =
          currentTrackIndex === playlist.length - 1 ? 0 : currentTrackIndex + 1;

        setPlayingTrack(playlist[nextTrackIndex]);
        // we reset the track
        audioPlayerRef.current.seekTo(0);
        // we set a timeout to let the button be on for a while
        setTimeout(() => setCommand(commands.play), 100);
        break;
      }
      default:
        console.log("case not covered by switch");
    }
  }, [command, audioPlayerRef, playbackRate, playing, playingTrack]);

  return (
    <div className="flex flex-col mt-3 justify-center items-center">
      <TransportButtons
        command={command}
        setCommand={setCommand}
        setPlayingTrack={setPlayingTrack}
        playingTrack={playingTrack}
      />
      <Playlist
        setPlayingTrack={setPlayingTrack}
        playingTrack={playingTrack}
        setPlaying={setPlaying}
        setCommand={setCommand}
      />
    </div>
  );
};
