const SelectionSort = require("../index");
describe("Selection Sort", () => {
  it("should sort Array elements", () => {
    let arr = [5, 4, 1, 2, 3];
    SelectionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
  it("should sort Array elements", () => {
    let arr = [20, 18, 12, 8, 5, -2];
    SelectionSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it("should sort Array elements", () => {
    let arr = [5, 12, 7, 5, 5, 7];
    SelectionSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it("should sort Array elements", () => {
    let arr = [2, 3, 5, 7, 13, 11];
    SelectionSort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
