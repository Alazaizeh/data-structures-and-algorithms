"use strict";
const validateBrackets = require("../index");
describe("validateBrackets", () => {
  test("should representing whether or not the brackets in the string are balanced", () => {
    let str = "()[[Extra Characters]]";
    expect(validateBrackets(str)).toEqual(true);
  });
  test("should representing whether or not the brackets in the string are balanced", () => {
    let str = "[({}]";
    expect(validateBrackets(str)).toEqual(false);
  });
  test("should representing whether or not the brackets in the string are balanced", () => {
    let str = "[}";
    expect(validateBrackets(str)).toEqual(false);
  });
  test("should representing whether or not the brackets in the string are balanced", () => {
    let str = "{}(){}";
    expect(validateBrackets(str)).toEqual(true);
  });
});
