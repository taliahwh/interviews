const findMaxLength = (nums) => {
  // init a hashmap to count binary frequency in window
  let count = {};
  let max = 0;

  // init windowStart var that will be used to eventually shrink the window
  let windowStart = 0;

  // iterate through input arr
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // add current num to hashmap count
    const num = nums[windowEnd];

    if (!(num in count)) count[num] = 0;
    count[num]++;

    // extend the window in multiples of two since we need for the 0s and 1s to be equal
    let windowLength = windowEnd - windowStart + 1;
    console.log(
      'windowLength % 2 === 0:',
      windowLength % 2 === 0,
      'count',
      count
    );

    while (windowLength % 2 === 0) {
      // check if 0s and 1s are equal, if they are -> update max
      if (count[0] === count[1]) {
        max = Math.max(max, windowLength);
        windowEnd++;
      } else {
        // slide the window forward by removing the first element
        // remember to update the hashmap count as well
        count[num]--;
        windowStart++;
      }
    }
    console.log('max:', max);
    console.log('-----------------------------------');
  }

  return max === 0 ? -1 : max;
};

// console.log(findMaxLength([0, 0])); // -> -1
// console.log(findMaxLength([0, 0, 1])); // -> 2
// console.log(findMaxLength([0, 1])); // -> 2
console.log(findMaxLength([0, 1, 0])); // -> 2
// console.log(findMaxLength([0, 1, 0, 1, 1, 0, 0])); // -> 6
