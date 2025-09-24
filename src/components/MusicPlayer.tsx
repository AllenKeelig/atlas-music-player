import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-background p-6 rounded-xl">
      <div className="flex-1">
        <CurrentlyPlaying />
      </div>
      <div className="flex-1">
        <Playlist />
      </div>
    </div>
  );
}
