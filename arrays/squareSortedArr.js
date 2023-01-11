// Time: O(n)
// Space: O(n)
const squareSortedArr = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let index = end;
  const newSortedArr = [];

  while (start <= end) {
    const left = nums[start] * nums[start];
    const right = nums[end] * nums[end];

    if (left > right) {
      newSortedArr[index] = left;
      start++;
    } else {
      // right > left
      newSortedArr[index] = right;
      end--;
    }
    index--;
  }
  return newSortedArr;
};

const nums = [-4, -1, 0, 3, 10];
const sorted = squareSortedArr(nums);
console.log(sorted);
