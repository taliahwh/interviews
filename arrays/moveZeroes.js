const moveZeroes = (nums) => {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // fill in remaining values of nums with 0
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
