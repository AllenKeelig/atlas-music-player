type PlayListItemProps = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function PlayListItem({
  id,
  title,
  artist,
  duration,
  isActive = false,
  className = "",
  onClick,
}: PlayListItemProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        isActive ? "bg-secondary text-background" : "bg-background text-primary hover:bg-accent"
      } ${className}`}
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-accent">{artist}</p>
      </div>
      <span className="text-sm">{duration}</span>
    </div>
  );
}
