type PlayListItemProps = {
  title: string;
  artist: string;
  duration: string;
  isActive?: boolean;
};

export default function PlayListItem({
  title,
  artist,
  duration,
  isActive = false,
}: PlayListItemProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        isActive
          ? "bg-secondary text-background"
          : "bg-background text-primary hover:bg-accent"
      }`}
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-accent">{artist}</p>
      </div>
      <span className="text-sm">{duration}</span>
    </div>
  );
}
