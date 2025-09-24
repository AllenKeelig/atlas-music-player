import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="space-y-2 bg-background p-4 rounded-xl">
      <PlayListItem
        title="Song A"
        artist="Artist 1"
        duration="3:45"
        isActive
      />
      <PlayListItem
        title="Song B"
        artist="Artist 2"
        duration="4:12"
      />
      <PlayListItem
        title="Song C"
        artist="Artist 3"
        duration="2:58"
      />
    </div>
  );
}
