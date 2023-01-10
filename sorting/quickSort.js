const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index;

  if (arr.length > 1) {
    index = partition(arr, left, right);

    // more elements on the left side of the pivot
    if (left < index - 1) quickSort(arr, left, index - 1);

    // more elements on the right side of the pivot
    if (right > index) quickSort(arr, index, right);
  }
  return arr;
};

// Pivot selected is element at last index in array
const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)]; // middle element
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

// Swap items in array
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// var sortArray = function (nums) {
//   return quickSort(nums, 0, nums.length - 1);
// };

const items = [5, 3, 7, 6, 2, 9];
const nums = [0, -9, 77, 32, -80, 5, 45, 11, 7];
console.log(quickSort(items)); // [2, 3, 5, 6, 7, 9]
console.log(quickSort(nums)); // [2, 3, 5, 6, 7, 9]
