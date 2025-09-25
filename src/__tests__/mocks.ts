// src/__tests__/mocks.ts
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const API_PLAYLIST = "/api/v1/playlist";
const API_SONG = "/api/v1/songs/:id";

export const handlers = [
  // Playlist handler
  http.get(API_PLAYLIST, () => {
    return HttpResponse.json([
      { id: "1", title: "Test Song 1", artist: "Mock Artist", duration: 200, cover: "/test1.jpg" },
      { id: "2", title: "Test Song 2", artist: "Mock Artist", duration: 180, cover: "/test2.jpg" },
    ]);
  }),

  // Individual song handler
  http.get(API_SONG, (req) => {
    const { id } = req.params as { id: string };
    return HttpResponse.json({
      id,
      title: `Test Song ${id}`,
      artist: "Mock Artist",
      duration: id === "1" ? 200 : 180,
      cover: `/test${id}.jpg`,
      song: `/test${id}.mp3`,
    });
  }),
];

export const server = setupServer(...handlers);
