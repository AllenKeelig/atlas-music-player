// src/components/AudioPlayer.tsx
import { useEffect, useRef } from "react";
import { Song } from "../lib/api";

type AudioPlayerProps = {
  song: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackRate: 0.5 | 1 | 2;
  onEnded?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
};

export default function AudioPlayer({
  song,
  isPlaying,
  volume,
  playbackRate,
  onEnded,
  onPlay,
  onPause,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Update audio source when song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!song?.song) {
      audio.pause();
      audio.src = "";
      return;
    }

    audio.src = song.song;
    audio.load();
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    if (isPlaying) {
      const p = audio.play();
      if (p) p.catch((e) => console.warn("Audio play failed", e));
    }
  }, [song, isPlaying, volume, playbackRate]);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Sync playback rate
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  // Play/pause synchronization
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      const p = audio.play();
      if (p) p.catch((e) => console.warn("Audio play failed", e));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      onEnded={onEnded}
      onPlay={onPlay}
      onPause={onPause}
      hidden
    />
  );
}
