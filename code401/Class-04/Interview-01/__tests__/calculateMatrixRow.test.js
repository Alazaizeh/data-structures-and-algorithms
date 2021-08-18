"use strict";
const calculateMatrixRow = require("../index");
describe("calculateMatrixRow", () => {
  it("should calculate the matrix rows vlause", () => {
    expect(
      calculateMatrixRow([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([6, 15, 24]);
  });
  it("should calculate the matrix rows vlause including nulls", () => {
    expect(
      calculateMatrixRow([
        [, 2, 3],
        [4, , 6],
        [7, 8, 9],
      ])
    ).toEqual([5, 10, 24]);
  });
  it("should calculate the matrix rows vlause including negative values", () => {
    expect(
      calculateMatrixRow([
        [1, 2, 3],
        [4, -11, 6],
        [7, 8, 9],
      ])
    ).toEqual([6, -1, 24]);
  });
});
