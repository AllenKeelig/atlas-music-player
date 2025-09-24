// src/components/MusicPlayer.jsx
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="">
        <CurrentlyPlaying />
      </div>

      <div className="">
        <Playlist />
      </div>
    </div>
  );
}
