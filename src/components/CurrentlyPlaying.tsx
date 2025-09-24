import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { Song } from "../lib/api";

type CurrentlyPlayingProps = {
  song: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onSkipNext: () => void;
  onSkipPrev: () => void;
  onToggleShuffle: () => void; // toggle shuffle
  shuffleEnabled: boolean;      // current shuffle state
  disablePrev?: boolean;        // disable back button
  disableNext?: boolean;        // disable forward button
  volume: number;
  setVolume: (v: number) => void;
  playbackRate: 0.5 | 1 | 2;
  onCycleSpeed: () => void;
};

export default function CurrentlyPlaying({
  song,
  isPlaying,
  onPlayPause,
  onSkipNext,
  onSkipPrev,
  onToggleShuffle,
  shuffleEnabled,
  disablePrev = false,
  disableNext = false,
  volume,
  setVolume,
  playbackRate,
  onCycleSpeed,
}: CurrentlyPlayingProps) {
  return (
    <div className="bg-primary text-background rounded-2xl p-6 shadow-md flex flex-col items-center gap-6">
      <CoverArt coverUrl={song?.cover} />
      <SongTitle artistName={song?.artist ?? "Unknown Artist"}>
        {song?.title ?? "No track selected"}
      </SongTitle>

      <PlayControls
        isPlaying={isPlaying}
        onPlayPause={onPlayPause}
        onSkipNext={onSkipNext}
        onSkipPrev={onSkipPrev}
        onToggleShuffle={onToggleShuffle}
        shuffleEnabled={shuffleEnabled}
        disablePrev={disablePrev}
        disableNext={disableNext}
        playbackRate={playbackRate}
        onCycleSpeed={onCycleSpeed}
      />

      <VolumeControls volume={volume} setVolume={setVolume} />
    </div>
  );
}
