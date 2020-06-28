import { getMessage } from "./message";

describe("get message", () => {
  test("returns hello world", () => {
    expect(getMessage()).toBe("Hello World!");
  });
});
