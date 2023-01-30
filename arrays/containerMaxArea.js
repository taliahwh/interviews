// Time: O(n)
// Space: O(1)
const maxArea = (height) => {
  // init max var to keep track of the max area
  let max = 0;

  // init two pointers that will start at either end of height arr
  let left = 0;
  let right = height.length - 1;

  // iterate through height arr and calculate the area at each step -> update max
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);

    height[left] < height[right] ? left++ : right--;
  }
  return max;
};

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // -> 49
const height2 = [1, 1]; // -> 1
console.log(maxArea(height1));
console.log(maxArea(height2));
