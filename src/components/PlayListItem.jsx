export default function PlaylistItem({ title, artist, duration, isActive }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        isActive
          ? "bg-secondary text-background" // active song uses secondary & background
          : "bg-background text-primary hover:bg-accent" // inactive song uses background & primary text, accent on hover
      }`}
    >
      {/* Left side: Song title + artist */}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-accent">{artist}</p>
      </div>

      {/* Right side: Duration */}
      <span className="text-sm">{duration}</span>
    </div>
  );
}
