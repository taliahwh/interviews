// Time: O(n)
// Space: O(n) -> hashmap
const rotate = (nums, k) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const index = (i + k) % nums.length;
    map[index] = nums[i];
  }

  for (let index in map) {
    nums[index] = map[index];
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // -> [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([1, 2, 3], 4)); // -> [3, 1, 2]
console.log(rotate([-1, -100, 3, 99], 2)); // -> [3, 99, -1, -100]
console.log(rotate([5, 10, 15, 20, 25, 30, 35, 40], 5)); // -> [20, 25, 30, 35, 40, 5, 10, 15]
