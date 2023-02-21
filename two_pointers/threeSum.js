/**
 * Time: O(n^2)
 * Space: O(n)
 */

// [-1,-1,0,1]
const threeSum = (nums) => {
  const output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = nums[i] * -1;
    const subResult = twoSum(nums, i + 1, target);
    output.push(...subResult);
  }

  return output;
};

const twoSum = (nums, startIndex, target) => {
  const subResult = [];
  let low = startIndex;
  let high = nums.length - 1;

  while (low < high) {
    const sum = nums[low] + nums[high];

    if (sum < target) {
      low++;
    } else if (sum > target) {
      high--;
    } else {
      // sum === target
      subResult.push([target * -1, nums[low], nums[high]]);

      while (nums[low] === nums[low + 1]) low++;
      while (nums[high] === nums[high - 1]) high--;

      low++;
      high--;
    }
  }
  return subResult;
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
