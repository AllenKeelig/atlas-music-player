export default function VolumeControls() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm text-gray-600">🔈</span>
      <input
        type="range"
        min="0"
        max="100"
        className="w-40 accent-black"
      />
      <span className="text-sm text-gray-600">🔊</span>
    </div>
  );
}
