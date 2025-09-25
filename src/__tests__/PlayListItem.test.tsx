// src/__tests__/PlayListItem.test.tsx
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("PlayListItem renders selected", () => {
  const { container } = render(
    <PlayListItem
      id="1"
      title="Test Song"
      artist="Test Artist"
      isSelected={true}
      onClick={() => {}}
    />
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem renders unselected", () => {
  const { container } = render(
    <PlayListItem
      id="2"
      title="Another Song"
      artist="Another Artist"
      isSelected={false}
      onClick={() => {}}
    />
  );
  expect(container).toMatchSnapshot();
});
