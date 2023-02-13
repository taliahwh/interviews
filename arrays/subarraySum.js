/**
 * 1. create a hashmap { cumulativeSum : occurence }
 * 2. with each iteration, update the sum.
 * 3. find the difference between the sum and k (sum - k)
 * - if it appears in map, add its occurence to count
 * - add sum to map, if it already exists, update its occurence by 1
 */

// Time: O(n)
// Space: 0(1) -> hashmap
const subarraySum = (nums, k) => {
  // { cumulativeSum : occurence }
  let map = { 0: 1 };
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const diff = sum - k;

    if (diff in map) {
      count += map[diff];
    }

    if (sum in map) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // -> 2
console.log(subarraySum([1, 2, 3], 3)); // -> 2
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2, 1], 7)); // -> 6
