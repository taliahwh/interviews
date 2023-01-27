/**
 * Intuitive Approach - Two Pointer Solution
 *
 * 1. Iterate over nums and move all 0s to the left:
 * - init a left and right pointer to keep track of either side of arr
 * - if left already = 0, increment & if right != 0, decrement
 * - if left != and right = 0, swap (helper function), move pointers inward
 *
 * --> should retuurn arr with all 0s to left
 *
 * 2. Iterate starting at left pointer (after zeros already sorted)
 * - Perform the same operation except wtih 1s and 2s
 *
 * Time: O(2n) -> O(n)
 * Space: O(1)
 */
const sortColors = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  // First Pass - Sorts 0s
  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else if (nums[right] !== 0) {
      right--;
    } else {
      // swap
      swap(nums, left, right);
      left++;
      right--;
    }
  }

  console.log(left);

  // Second Pass - Sorts 1s
  right = nums.length - 1;
  while (left < right) {
    if (nums[left] === 0 || nums[left] === 1) {
      left++;
    } else if (nums[right] === 2) {
      right--;
    } else {
      // swap
      swap(nums, left, right);
      left++;
      right--;
    }
  }

  return nums;
};

// -----------------------------------------------------------------------------------------
/**
 * Single pass solution O(n) time and O(1) space relies on using 3 pointers: low, mid, high
 * Both the low and mid pointers will begin at 0, and for each iteration we will check for the value at nums[m]
 * in order to keep the logic consistent and the code easily readable
 *
 * If nums[m] = 0 -> swap mid and low and move both pointers forward since 0 is our lowest point
 * If nums[m] = 1 -> move mid forward since that is the base case for mid
 * If nums[m] = 2 -> swap mid and high, and decrement high since we know 2 is the highest point
 */
const sortColors2 = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    const num = nums[mid];

    if (num === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (num === 2) {
      swap(nums, high, mid);
      high--;
    } else {
      mid++;
    }
  }
  return nums;
};

// -----------------------------------------------------------------------------------------

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};

const nums1 = [2, 0, 2, 1, 1, 0];
const nums2 = [2, 0, 1];
const nums3 = [0, 0, 2, 1, 1];
const nums4 = [1, 0, 0];
console.log(sortColors2(nums1));
console.log(sortColors2(nums2));
console.log(sortColors2(nums3));
console.log(sortColors2(nums4));
