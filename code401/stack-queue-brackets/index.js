"use strict";

function validateBrackets(str) {
  let arr = str.split("");
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr.includes("(") && arr.includes(")")) {
      arr.pop(arr.includes("("));
      arr.pop(arr.includes(")"));
    }
    if (arr.includes("[") && arr.includes("]")) {
      arr.pop(arr.includes("["));
      arr.pop(arr.includes("]"));
    }
    if (arr.includes("{") && arr.includes("}")) {
      arr.pop(arr.includes("{"));
      arr.pop(arr.includes("}"));
    }
  }

  return !/[{}()\[\]]/g.test(arr);
}

// console.log(validateBrackets("()[[Extra Characters]]"));
// console.log(validateBrackets("[({}]"));
// console.log(validateBrackets("[}"));
// console.log(validateBrackets("{}(){}"));
module.exports = validateBrackets;
