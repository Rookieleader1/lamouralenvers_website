import {
  audio0,
  audio1,
  audio10,
  audio11,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
} from "./assets/audio/tracks";

const playlist = [
  { url: audio0, name: "BRULONS TOUS ICI" },
  { url: audio1, name: "STREET LOVA" },
  { url: audio2, name: "LE MAUVAIS" },
  { url: audio3, name: "LOLOLOVE" },
  { url: audio4, name: "JE VOUS AIME" },
  { url: audio5, name: "HORS CADRE" },
  { url: audio6, name: "GUERRE" },
  { url: audio7, name: "LE JOUR D APRES" },
  { url: audio8, name: "L'ANNIV" },
  { url: audio9, name: "DANSER" },
  { url: audio10, name: "SANS NOTICE" },
  { url: audio11, name: "LES CONTRE JOURS" },
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
