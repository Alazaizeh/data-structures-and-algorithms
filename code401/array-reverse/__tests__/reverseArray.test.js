const reverseArray = require("../index");
describe("reverseArray Function", () => {
  it("should return reversed array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("should return reversed array even if array length is 1", () => {
    expect(reverseArray([1])).toEqual([1]);
  });
});
