import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-primary p-6">
      <MusicPlayer />
      <Footer />
    </div>
  );
}
