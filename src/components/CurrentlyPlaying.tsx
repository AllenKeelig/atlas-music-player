import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="bg-primary text-background rounded-2xl p-6 shadow-md flex flex-col items-center gap-6">
      <CoverArt />
      <SongTitle artistName="Sample Artist">Sample Song</SongTitle>
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
