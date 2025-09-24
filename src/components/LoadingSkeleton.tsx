export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-pulse p-6">
      {/* Left side: CurrentlyPlaying skeleton */}
      <div className="flex-1 bg-background rounded-2xl p-6 shadow-md flex flex-col items-center gap-4">
        <div className="w-48 h-48 bg-accent rounded-xl"></div>
        <div className="w-32 h-6 bg-accent rounded"></div>
        <div className="w-24 h-4 bg-accent rounded"></div>
        <div className="flex gap-3 mt-4">
          <div className="w-10 h-10 bg-accent rounded-full"></div>
          <div className="w-12 h-12 bg-accent rounded-full"></div>
          <div className="w-10 h-10 bg-accent rounded-full"></div>
        </div>
        <div className="w-40 h-2 bg-accent rounded mt-4"></div>
      </div>

      {/* Right side: Playlist skeleton */}
      <div className="flex-1 space-y-4">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div key={idx} className="w-full h-12 bg-accent rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}
