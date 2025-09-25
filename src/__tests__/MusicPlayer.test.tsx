// src/__tests__/MusicPlayer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, beforeEach, test, expect } from "vitest";
import { server } from "./mocks";
import MusicPlayer from "../components/MusicPlayer";

// Mock HTMLMediaElement methods (play/pause) for JSDOM
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: () => {},
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: () => {},
  });

  // Start MSW server
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("MusicPlayer loads and displays mocked playlist", async () => {
  render(<MusicPlayer />);

  const song1 = await screen.findByText(/Test Song 1/i);
  const song2 = await screen.findByText(/Test Song 2/i);

  expect(song1).toBeInTheDocument();
  expect(song2).toBeInTheDocument();
});
