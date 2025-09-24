import { PlaylistEntry } from "../lib/api";
import PlayListItem from "./PlayListItem";

type PlaylistProps = {
  tracks: PlaylistEntry[];
  currentTrackId: string | null;
  onSelectTrack: (id: string) => void;
};

export default function Playlist({ tracks, currentTrackId, onSelectTrack }: PlaylistProps) {
  return (
    <div className="space-y-2 bg-background p-4 rounded-xl">
      {tracks.map((t) => (
        <PlayListItem
          key={t.id}
          id={t.id}
          title={t.title}
          artist={t.artist}
          duration={formatDuration(t.duration)}
          isActive={t.id === currentTrackId}
          onClick={() => onSelectTrack(t.id)}
        />
      ))}
    </div>
  );
}

// helper to format seconds -> mm:ss
function formatDuration(sec: number): string {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
