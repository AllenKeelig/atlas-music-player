// central small API helper and types
export const API_BASE = "/api/v1"; // <-- change this if your server exposes a different path

export type PlaylistEntry = {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  duration: number; // seconds
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  duration: number;
  cover?: string; // URL to cover image
  song?: string; // URL to audio file
};

export async function fetchPlaylist(): Promise<PlaylistEntry[]> {
  const res = await fetch(`${API_BASE}/playlist`);
  if (!res.ok) throw new Error("Failed to load playlist");
  return res.json();
}

export async function fetchSongById(id: string): Promise<Song> {
  const res = await fetch(`${API_BASE}/songs/${id}`);
  if (!res.ok) throw new Error(`Failed to load song ${id}`);
  return res.json();
}

export async function fetchLyricsForId(id: string): Promise<{ lyrics: string }> {
  const res = await fetch(`${API_BASE}/lyrics/${id}`);
  if (!res.ok) throw new Error(`Failed to load lyrics for ${id}`);
  return res.json();
}
