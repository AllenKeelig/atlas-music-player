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
  onShuffle: () => void;
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
  onShuffle,
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
        onShuffle={onShuffle}
        playbackRate={playbackRate}
        onCycleSpeed={onCycleSpeed}
      />

      <VolumeControls volume={volume} setVolume={setVolume} />
    </div>
  );
}
