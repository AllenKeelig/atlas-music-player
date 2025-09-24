import { Rewind, Play, FastForward, Shuffle, Gauge } from "lucide-react";

export default function PlayControls() {
  return (
    <div>
      <button className="p-2 rounded-full hover:bg-gray-200">1x
      </button>
      <button className="p-2 rounded-full hover:bg-gray-200">
        <Rewind className="w-6 h-6" />
      </button>
      <button className="p-3 rounded-full bg-black text-white hover:bg-gray-800">
        <Play className="w-6 h-6" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-200">
        <FastForward className="w-6 h-6" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-200">
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
}
