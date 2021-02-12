import { useEffect } from "react";
import { commands, playlist } from "../../globals";
import {
  FastForwardBtn,
  NextTrackBtn,
  PlayBtn,
  PreviousTrackBtn,
  StopBtn,
} from "./Buttons";
import { background } from "../../img/buttons";
import { VolumeButton } from "./VolumeBtn";
import { Playlist } from "../Playlist";

const TransportButtons = ({ command, setCommand }) => {
  return (
    <div
      className="flex items-center justify-center p-3"
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
        handleClick={() => setCommand(commands.stop)}
        isOn={command === commands.stop}
      />
      <PreviousTrackBtn handleClick={() => console.log("prev")} isOn={false} />
      <NextTrackBtn handleClick={() => console.log("prev")} isOn={false} />
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
  volume,
  setVolume,
}) => {
  useEffect(() => {
    if (playbackRate !== 0 && command !== commands.fastForward)
      setPlaybackRate(1);

    switch (command) {
      case commands.play:
        //if no track is currently playing, set the track to the first one
        if (!playingTrack) setPlayingTrack(playlist[0]);
        if (!playing) setPlaying(true);
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
        break;
      default:
        console.log("case not covered by switch");
    }
  }, [command, audioPlayerRef, playbackRate, playing, playingTrack]);

  return (
    <div className="flex flex-col mt-3 justify-center items-center">
      <div className="flex justify-center items-center">
        <TransportButtons command={command} setCommand={setCommand} />
        <div className="ml-3">
          <VolumeButton setVolume={setVolume} volume={volume} />
        </div>
      </div>
      <Playlist
        setPlayingTrack={setPlayingTrack}
        setPlaying={setPlaying}
        setCommand={setCommand}
      />
    </div>
  );
};
