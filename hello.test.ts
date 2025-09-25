//hello.test.ts
import { test, expect } from "vitest"; // must import methods used for testing

test("My First Test", () => {
  expect(2 + 2).toBe(4);
});