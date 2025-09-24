import { useEffect, useRef, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import { PlaylistEntry, Song, fetchPlaylist, fetchSongById } from "../lib/api";

export default function MusicPlayer(): JSX.Element {
  const [tracks, setTracks] = useState<PlaylistEntry[]>([]);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [playbackRate, setPlaybackRate] = useState<0.5 | 1 | 2>(1);
  const [shuffleEnabled, setShuffleEnabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchPlaylist()
      .then((list) => {
        setTracks(list);
        if (list.length > 0 && !currentTrackId) setCurrentTrackId(list[0].id);
      })
      .catch((err) => console.error("Playlist fetch error", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!currentTrackId) {
      setCurrentSong(null);
      return;
    }

    setLoading(true);
    fetchSongById(currentTrackId)
      .then((s) => setCurrentSong(s))
      .catch((err) => {
        console.error("Failed to fetch song details", err);
        setCurrentSong(null);
      })
      .finally(() => setLoading(false));
  }, [currentTrackId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!currentSong?.song) {
      audio.pause();
      audio.src = "";
      return;
    }

    audio.src = currentSong.song;
    audio.load();
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    if (isPlaying) {
      const p = audio.play();
      if (p) p.catch((e) => console.warn("play failed", e));
    }
  }, [currentSong, isPlaying, playbackRate]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const onSelectTrack = (id: string) => {
    setCurrentTrackId(id);
    setIsPlaying(true);
  };

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const p = audio.play();
      if (p) p.catch((e) => console.warn("play failed", e));
      setIsPlaying(true);
    }
  };

  const toggleShuffle = () => setShuffleEnabled((prev) => !prev);

  const skip = (dir: 1 | -1) => {
    if (!tracks.length || !currentTrackId) return;

    if (shuffleEnabled && dir === 1) {
      let next;
      do {
        next = tracks[Math.floor(Math.random() * tracks.length)].id;
      } while (next === currentTrackId && tracks.length > 1);
      setCurrentTrackId(next);
      setIsPlaying(true);
      return;
    }

    const idx = tracks.findIndex((t) => t.id === currentTrackId);
    if (idx === -1) return;

    const next = idx + dir;
    if (next < 0 || next >= tracks.length) return;

    setCurrentTrackId(tracks[next].id);
    setIsPlaying(true);
  };

  const cycleSpeed = () => {
    setPlaybackRate((prev) => {
      if (prev === 0.5) return 1;
      if (prev === 1) return 2;
      return 0.5;
    });
  };

  const currentIndex = tracks.findIndex((t) => t.id === currentTrackId);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === tracks.length - 1;

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-background p-6 rounded-xl">
      <audio
        ref={audioRef}
        onEnded={() => skip(1)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="flex-1">
        <CurrentlyPlaying
          song={currentSong}
          isPlaying={isPlaying}
          onPlayPause={playPause}
          onSkipNext={() => skip(1)}
          onSkipPrev={() => skip(-1)}
          onToggleShuffle={toggleShuffle}
          shuffleEnabled={shuffleEnabled}
          disablePrev={isFirst}
          disableNext={isLast && !shuffleEnabled}
          volume={volume}
          setVolume={setVolume}
          playbackRate={playbackRate}
          onCycleSpeed={cycleSpeed}
        />
      </div>

      <div className="flex-1">
        <Playlist
          tracks={tracks}
          currentTrackId={currentTrackId}
          onSelectTrack={onSelectTrack}
        />
      </div>
    </div>
  );
}
