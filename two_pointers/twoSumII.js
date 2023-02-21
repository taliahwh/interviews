/**
 * This problem asks us to return the indicies of two numbers as an integer array [index1, index2]
 * - Note that both index1 and index2 are the respective indicies in numbers added by 1
 * - Restraints: Can only use O(1) extra space, array is already sorted
 * - There is guaranteed to be one unique solution.
 *
 * Intuitive Approach:
 * Using two pointers (low, high) iterate through numbers array while the two pointers aren't equal
 * We'll calculate the sum at each iteration. Since the array is sorted we'll know that if the sum
 * is greater than the target then we'll need to look at a lesser value (thus moving the high pointer down)
 * And likewise if the sum is less than the target, we'll move the low pointer up
 *
 * When we find a pair, return [low + 1, high + 1]
 *
 * Time: O(n)
 * Space: O(1)
 */
const twoSum = (numbers, target) => {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    const sum = numbers[low] + numbers[high];

    if (sum < target) {
      low++;
    } else if (sum > target) {
      high--;
    } else {
      // sum === target -> return [low + 1, high + 1]
      return [low + 1, high + 1];
    }
  }
};

const test1 = twoSum([2, 7, 11, 15], 9);
const test2 = twoSum([2, 3, 4], 6);
const test3 = twoSum([-1, 0], -1);
const test4 = twoSum([3, 5, 7, 10, 11, 15], 17);

console.log(test1); // -> [1,2]
console.log(test2); // -> [1,3]
console.log(test3); // -> [1,2]
console.log(test4); // -> [3,4]
