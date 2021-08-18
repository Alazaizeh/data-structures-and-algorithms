"use strict";
function fibonacci(n) {
  let temp,
    first = 0,
    second = 1,
    final;
  for (let i = 1; i <= n + 1; i++) {
    final = first;
    temp = first + second;
    first = second;
    second = temp;
  }
  return final;
}

console.log(fibonacci(2));

module.exports = fibonacci;
