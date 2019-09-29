import { testMethod } from "../src";

test("create a new hello", () => {
  expect(testMethod("World")).toBe("Hello World");
});