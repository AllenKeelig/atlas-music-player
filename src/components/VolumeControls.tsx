type VolumeControlsProps = {
  volume: number; // 0..1
  setVolume: (v: number) => void;
};

export default function VolumeControls({ volume, setVolume }: VolumeControlsProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value) / 100;
    setVolume(Math.min(1, Math.max(0, val)));
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm text-gray-600">🔈</span>
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(volume * 100)}
        onChange={onChange}
        className="w-40 accent-black"
      />
      <span className="text-sm text-gray-600">🔊</span>
    </div>
  );
}
