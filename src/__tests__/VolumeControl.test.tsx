// src/__tests__/VolumeControl.test.tsx
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControl from "../components/VolumeControls";

test("VolumeControl renders with default volume", () => {
  const { container } = render(
    <VolumeControl volume={0.5} setVolume={() => {}} />
  );
  expect(container).toMatchSnapshot();
});

test("VolumeControl renders muted", () => {
  const { container } = render(
    <VolumeControl volume={0} setVolume={() => {}} />
  );
  expect(container).toMatchSnapshot();
});

test("VolumeControl renders max volume", () => {
  const { container } = render(
    <VolumeControl volume={1} setVolume={() => {}} />
  );
  expect(container).toMatchSnapshot();
});
