function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      console.log(arr, `Min = ${min}   J = ${j}`);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}

let x = [2, 3, 5, 7, 13, 11];

// console.log(x);
SelectionSort(x);
// console.log(x);

module.exports = SelectionSort;
