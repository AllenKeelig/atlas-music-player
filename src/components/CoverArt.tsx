import React from "react";

type CoverArtProps = {
  coverUrl?: string;
  size?: number; // px, optional
};

const CoverArt: React.FC<CoverArtProps> = ({ coverUrl, size = 192 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-2xl overflow-hidden bg-accent flex items-center justify-center"
    >
      {coverUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={coverUrl} alt="cover art" className="w-full h-full object-cover" />
      ) : (
        <img src="/images/cover-art.png" alt="placeholder cover art" />
      )}
    </div>
  );
};

export default CoverArt;

