"use strict";

const BinarySearch = require("../index");

describe("BinarySearch", () => {
  it("should retrun the index of key ", () => {
    expect(BinarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
  });
  it("should retrun false if key not found", () => {
    expect(BinarySearch([1, 2, 3, 4, 5], 7)).toEqual(false);
  });

  it("should retrun  the index of key if array lengh equal 1", () => {
    expect(BinarySearch([11], 11)).toEqual(0);
  });
});
