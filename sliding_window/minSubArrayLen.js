const minSubArrayLen = (target, nums) => {
  let sum = 0;
  let min = Infinity;

  let left = 0; // windowStart
  let right = 0; // windowEnd

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // -> 2
console.log(minSubArrayLen(4, [1, 4, 4])); // -> 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // -> 0
