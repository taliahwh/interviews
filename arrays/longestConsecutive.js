// Time: O(n)
// Space: O(n)
const longestConsecutive = (nums) => {
  if (!nums) return 0;
  // init a Set with the input nums arr so utilize the O(1) search/insertion
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    // to make sure we're starting at the beginning of a sequence,
    // check if set has seen the prev num.. if it has -> continue with next iteration
    if (set.has(num - 1)) continue;

    let curNum = num;
    let curMax = 1;

    while (set.has(curNum + 1)) {
      curNum++;
      curMax++;
    }
    max = Math.max(max, curMax);
  }

  return max;
};

const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums1)); // -> 4
console.log(longestConsecutive(nums2)); // -> 9
