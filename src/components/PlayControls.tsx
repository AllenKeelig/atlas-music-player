import { Rewind, Play, FastForward, Shuffle, Pause } from "lucide-react";

type PlayControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onSkipNext: () => void;
  onSkipPrev: () => void;
  onShuffle: () => void;
};

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onSkipNext,
  onSkipPrev,
  onShuffle,
}: PlayControlsProps) {
  return (
    <div className="flex gap-3 items-center">
      <button onClick={() => {}} className="p-2 rounded-full hover:bg-accent">
        1x
      </button>
      <button onClick={onSkipPrev} className="p-2 rounded-full hover:bg-accent">
        <Rewind className="w-6 h-6" />
      </button>

      <button
        onClick={onPlayPause}
        className="p-3 rounded-full bg-secondary text-background hover:bg-accent"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>

      <button onClick={onSkipNext} className="p-2 rounded-full hover:bg-accent">
        <FastForward className="w-6 h-6" />
      </button>
      <button onClick={onShuffle} className="p-2 rounded-full hover:bg-accent">
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
}
