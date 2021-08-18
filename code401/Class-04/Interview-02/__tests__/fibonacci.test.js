"use strict";
const fibonacci = require("../index");
describe("fibonacci", () => {
  it("should calculate fibonacci number", () => {
    expect(fibonacci(8)).toEqual(21);
  });
});
