function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

console.log(binarySearch(arr, 8));  // 3
// 0 10
// 0 4
// 3 4
// index = 3

const arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
console.log(binarySearch(arr, 16)); // 4
// 0 10
// 6 10
// 6 7
// 7 7
// -1 => not found