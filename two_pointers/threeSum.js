/**
 * Time: O(n^2)
 * Space: O(n)
 */

// [-1,-1,0,1]
const threeSum = (nums, target = 0) => {
  const output = [];

  // skip iteration if not enough values for solution
  if (nums.length < 3) return output;

  // sort the array
  nums.sort((a, b) => a - b);

  // iterate up until the third-to-last value to avoid duplicates
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // for each iteration of i, perform a twoSum function with two pointers
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];

      if (sum < target) {
        low++;
      } else if (sum > target) {
        high--;
      } else {
        // sum === target
        output.push([nums[i], nums[low], nums[high]]);

        // skip duplicate values of low and high
        while (nums[low] === nums[low + 1]) low++;
        while (nums[high] === nums[high - 1]) high--;

        // move pointers inward
        low++;
        high--;
      }
    }
  }
  return output;
};

const test1 = threeSum([-1, 0, 1, 2, -1, -4]);
const test2 = threeSum([0, 1, 1]);
const test3 = threeSum([0, 0, 0]);
const test4 = threeSum([4, -3, 2, 1, 4]);
const test5 = threeSum([1, -1, -1, 0]);
const test6 = threeSum([-2, 0, 1, 1, 2]);

console.log(test1); // -> [[-1,-1,2],[-1,0,1]]
console.log(test2); // -> []
console.log(test3); // -> [[0,0,0]]
console.log(test4); // -> [ [ -3, 2, 1 ] ]
console.log(test5); // -> [[-1,0,1]]
console.log(test6); // -> [ -2, 0, 2 ], [ -2, 1, 1 ]
