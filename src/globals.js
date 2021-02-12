import { audio1, audio2, audio3, audio4 } from "./assets/audio/tracks";

const playlist = [
  { url: audio1, name: "JE VOUS AIME" },
  { url: audio2, name: "GUERRE" },
  { url: audio3, name: "BRULONS" },
  { url: audio4, name: "STREET LOVA" },
];

const commands = {
  play: "PLAY",
  pause: "PAUSE",
  stop: "STOP",
  fastForward: "FAST_FORWARD",
  rewind: "REWIND",
  nextTrack: "NEXT_TRACK",
  previousTrack: "PREVIOUS_TRACK",
};
export { playlist, commands };
