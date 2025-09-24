import { ReactNode } from "react";

type SongTitleProps = {
  artistName: string;
  children: ReactNode;
};

const SongTitle: React.FC<SongTitleProps> = ({ artistName, children }) => {
  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl font-bold">{children}</h2>
      <p className="text-sm text-accent">{artistName}</p>
    </div>
  );
};

export default SongTitle;
