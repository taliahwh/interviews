var productExceptSelf = function(nums) {
  // 1. first loop -> fill arr with products of left values
  // 2. second loop -> fill array with product of right values
  // 3. third loop -> multiply first[i] * left[i] = answer[i]

  // Time: O(N)
  // Space: O(N)
  const leftProducts = [];
  for(let i = 0; i < nums.length; i++) {
      if(i === 0) {
          leftProducts[0] = 1;
          continue;
      }
      leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }
  
  const rightProducts = [];
  const numsLength = nums.length - 1;
  for(let j = numsLength; j >= 0; j--) {
      if(j === numsLength) {
      rightProducts[numsLength] = 1;
      continue;
      }

      rightProducts[j] = nums[j + 1] * rightProducts[j + 1];
  }
  
  const answer = []
  for(let k = 0; k < nums.length; k++) {
      answer[k] = leftProducts[k] * rightProducts[k];
  }
  
  return answer;

   
};

/*
Add optimisation to the solution above.

Instead of using two arrays left[] and right[], we will keep track of product from left and product from right.
Hence, at each i, res[i] = productFromLeft * productFromRight. Since we can't have access to productFromLeft and
productFromRight at the same time without storing them somewhere, we will set res[i] to productFromLeft when
iterating from the start and we will multiply productFromRight to each res[i] as we iterate through from the end.
*/

var productExceptSelf = function(nums) {
  if (nums === null || nums.length <= 1) {
      return [];
  }
  let productFromLeft = 1, productFromRight = 1;
  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
      res[i] = productFromLeft;
      productFromLeft *= nums[i];
  }
  for (let i = nums.length-1; i >= 0; i--) {
      res[i] *= productFromRight;
      productFromRight *= nums[i];
  }
  return res;
  // T.C: O(N)
  // S.C: O(1), assuming that we do not count the output array as extra space
}