/**
 * We know that the integers can only be 0's or 1's, therefor if we think of 0's as -1's,
 * any sum of a contiguous array with an equal number of 0's and 1's will always be equal to 0.
 *
 * The first step will be to iterate though the nums input array and for each iteration:
 * update the current sum
 *
 * Before storing the sum and its index and value into a hashmap, we'll want to check snd see
 * if the current sum has been stored in the hashmap before -> if it has, that means we have
 * located a contiguous array that meets the parameters (equal 0's and 1's)
 *
 * The length of the contiguous array will be the current index - index in hashmap with matching sum
 * update maxLength
 *
 * return maxLength, if 0 -> return -1
 *
 *
 */

const findMaxLength = (nums) => {
  const prevSum = {}; // { sum : index }
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    // update sum, if nums[i] = 0, use -1 as its value
    const binary = nums[i];
    binary === 0 ? (sum += -1) : (sum += 1);

    // check if sum has appeared in prevSum, if it has we've found a contiguous array with
    // equal 0's and 1's, so we'll need to find the length by subtracting the index at that
    // key value pair from the current index
    if (sum in prevSum) {
      const length = i - prevSum[sum];
      maxLength = Math.max(maxLength, length);
    } else {
      // store current sum and index into prevSum for future reference
      prevSum[sum] = i;
    }
    if (sum === 0) maxLength = Math.max(maxLength, i + 1);
  }
  return maxLength;
};

console.log(findMaxLength([0, 0])); // -> -1
console.log(findMaxLength([0, 0, 1])); // -> 2
console.log(findMaxLength([0, 1])); // -> 2
console.log(findMaxLength([0, 1, 0])); // -> 2
console.log(findMaxLength([0, 1, 0, 1, 1, 0, 0])); // -> 6
console.log(findMaxLength([1, 1, 1, 1, 1, 1, 1, 1])); // -> 0

// 0, 1, 0, 1, 1, 1, 0, 1, 0
