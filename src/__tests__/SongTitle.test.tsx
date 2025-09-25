// src/__tests__/SongTitle.test.tsx
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

test("SongTitle renders with title and artist", () => {
  const { container } = render(
    <SongTitle title="Cool Song" artist="Cool Artist" />
  );
  expect(container).toMatchSnapshot();
});

test("SongTitle renders with only title", () => {
  const { container } = render(<SongTitle title="Lonely Song" />);
  expect(container).toMatchSnapshot();
});
