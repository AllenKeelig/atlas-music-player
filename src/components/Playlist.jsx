// src/components/Playlist.jsx
import PlaylistItem from "./PlayListItem.jsx";

export default function Playlist() {
  return (
    <div className="space-y-2">
      <PlaylistItem title="Song A" artist="Artist 1" duration="3:45" isActive />
      <PlaylistItem title="Song B" artist="Artist 2" duration="4:12" />
      <PlaylistItem title="Song C" artist="Artist 3" duration="2:58" />
    </div>
  );
}
