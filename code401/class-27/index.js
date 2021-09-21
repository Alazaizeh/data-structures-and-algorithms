function Mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];

    arr.forEach((ele, index) => {
      if (index < mid) {
        left.push(ele);
      } else {
        right.push(ele);
      }
    });

    // sort the left side
    Mergesort(left);
    // sort the right side
    Mergesort(right);
    // merge the sorted left and right sides together
    Merge(left, right, arr);
  }
}
function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if (i < left.length) {
    while (i < left.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  } else {
    while (j < right.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  }
}
let a = [20, 18, 12, 8, 5, -2];

console.log(a);
Mergesort(a);

module.exports = Mergesort;
