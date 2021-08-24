function BinarySearch(arr, key) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (arr[middle] === key) {
      return middle;
    } else if (arr[middle] < key) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }

  return false;
}

console.log(BinarySearch([1, 2, 3, 4, 5], 3));

module.exports = BinarySearch;
