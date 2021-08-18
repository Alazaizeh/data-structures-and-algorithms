"use strict";

function calculateMatrixRow(arr) {
  let newArr = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != null) {
        newArr[i] += arr[i][j];
      }
    }
  }

  return newArr;
}

console.log(
  calculateMatrixRow([
    [, 2, 3],
    [4, -11, 6],
    [7, 8, 9],
  ])
);

module.exports = calculateMatrixRow;
