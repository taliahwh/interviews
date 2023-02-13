/**
 * 1. Create hashmap to count frequency of each letter
 * 2. Iterate through hashmap k times and find the max number
 * 3. After each max number is found:
 * - push it into output arr
 * - remove it from map
 * 4. Return output
 */
const topKFrequent = (nums, k) => {
  const map = {};

  for (let num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }

  // BRUTE FORCE
  // for (let i = 1; i <= k; i++) {
  //   let max = 0;
  //   for (let num in map) {
  //     max = Math.max(max, map[num]);
  //   }
  //   const num = Object.keys(map).find((key) => map[key] === max);
  //   output.push(Number(num));
  //   map[num] = 0;
  // }

  const sorted = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => Number(entry[0]))
    .slice(0, k);

  return sorted;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // -> [1,2]
// console.log(topKFrequent([1], 1)); // -> [1]
console.log(topKFrequent([5, 5, 5, 5, 5, 7, 7, 4, 4, 4, 4, 3, 3, 3], 3)); // -> [5,3,4]
