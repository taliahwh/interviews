// Uses recursion to halve the arrays with the slice() method
// Base case is when the arrays have a length of 0 or 1
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // In order to divide the array in half,
  // we need to find the middle element
  let mid = Math.floor(arr.length / 2);

  // recursively diving the array in half until base case is reached
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// Helper function that accepts two SORTED arrays and
// merges them into one larger, sorted array
const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    // insert the smaller item into the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...sortedArr, ...left, ...right];
};

const arr = mergeSort([3, 5, 8, 5, 99, 1]); // [1, 3, 5, 5, 8, 99]
console.log(arr);
