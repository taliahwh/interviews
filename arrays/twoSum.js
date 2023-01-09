// Time: O(n)
// Space: O(n) -> hashmap
const twoSum = (nums, target) => {
  const prev = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const compliment = target - num;

    if (compliment in prev) return [i, prev[compliment]];
    prev[num] = i;
  }
};
