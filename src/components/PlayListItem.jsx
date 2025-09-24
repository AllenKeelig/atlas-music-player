// src/components/PlaylistItem.jsx
export default function PlaylistItem({ title, artist, duration, isActive }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {/* Left side: Song title + artist */}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>

      {/* Right side: Duration */}
      <span className="text-sm">{duration}</span>
    </div>
  );
}
