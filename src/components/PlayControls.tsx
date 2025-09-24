import { Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex gap-3">
      <button className="p-2 rounded-full hover:bg-accent">1x</button>
      <button className="p-2 rounded-full hover:bg-accent">
        <Rewind className="w-6 h-6" />
      </button>
      <button className="p-3 rounded-full bg-secondary text-background hover:bg-accent">
        <Play className="w-6 h-6" />
      </button>
      <button className="p-2 rounded-full hover:bg-accent">
        <FastForward className="w-6 h-6" />
      </button>
      <button className="p-2 rounded-full hover:bg-accent">
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
}
