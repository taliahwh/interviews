/**
 * SLiding Window Technique:
 *
 * Increase the size of the window while the right pointer is less than the string's length
 * and while it meets a certain condition:
 *
 * We know that k represents the number of characters than can be replaced
 *
 * With each char addition to the window, we will update it's count in a hashfrequencies.
 *
 * By taking the char with the max count in the window and substracting it from the window's
 * length, we'll know the amount of chars that need to be replaced in order to make the window valid
 *
 * If that replacement number is <= k, we can use max val logic to update the result
 * If however it is greater than k, we'll want to shrink the window and decrement the count of the
 * char being removed in the hashfrequencies by 1
 *
 * Time: O(n)
 * Space: O(n)
 *
 *
 */
const characterReplacement = (s, k) => {
  const frequencies = {};

  // Var to track the char with the most frequenct count
  let highestFrequency = 0;

  // Var to track the longest window size
  let longest = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    // add char to frequencies
    const rightChar = s.charAt(right);
    frequencies[rightChar] = frequencies[rightChar] + 1 || 1;

    // check if the newly add char is the most frequent char
    highestFrequency = Math.max(highestFrequency, frequencies[rightChar]);

    // if the window isn't valid, we want to decrement until it meets the requirement
    // shrink the window by incrementing the left pointer and removing the char from frequencies map
    // const windowSize = right - left + 1;
    while (right - left + 1 - highestFrequency > k) {
      const leftChar = s.charAt(left);
      frequencies[leftChar]--;
      left++;
    }

    // Once we have a valid window, check if it's longer than the current longest var.
    longest = Math.max(longest, right - left + 1);

    // Move the window forward
    right++;
  }

  return longest;
};

console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4
console.log(characterReplacement('ACCADACCAA', 3)); // 7
