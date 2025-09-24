// src/components/Playlist.jsx
import PlayListItem from "./PlayListItem.jsx";

export default function Playlist() {
  return (
    <div className="space-y-2 bg-background p-4 rounded-xl">
      <PlayListItem
        title="Song A"
        artist="Artist 1"
        duration="3:45"
        isActive
        className="bg-secondary text-background"
      />
      <PlayListItem
        title="Song B"
        artist="Artist 2"
        duration="4:12"
        className="bg-background text-primary"
      />
      <PlayListItem
        title="Song C"
        artist="Artist 3"
        duration="2:58"
        className="bg-background text-primary"
      />
    </div>
  );
}
