import { Rewind, Play, FastForward, Shuffle, Pause } from "lucide-react";

type PlayControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onSkipNext: () => void;
  onSkipPrev: () => void;
  onShuffle: () => void;
  playbackRate: 0.5 | 1 | 2;
  onCycleSpeed: () => void;
  disablePrev?: boolean; // disable back button if first song
  disableNext?: boolean; // disable forward button if last song
};

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onSkipNext,
  onSkipPrev,
  onShuffle,
  playbackRate,
  onCycleSpeed,
  disablePrev = false,
  disableNext = false,
}: PlayControlsProps) {
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={onCycleSpeed}
        className="p-2 rounded-full hover:bg-accent"
      >
        {playbackRate}x
      </button>

      <button
        onClick={onSkipPrev}
        disabled={disablePrev}
        className={`p-2 rounded-full hover:bg-accent ${
          disablePrev ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Rewind className="w-6 h-6" />
      </button>

      <button
        onClick={onPlayPause}
        className="p-3 rounded-full bg-secondary text-background hover:bg-accent"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>

      <button
        onClick={onSkipNext}
        disabled={disableNext}
        className={`p-2 rounded-full hover:bg-accent ${
          disableNext ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FastForward className="w-6 h-6" />
      </button>

      <button onClick={onShuffle} className="p-2 rounded-full hover:bg-accent">
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
}
