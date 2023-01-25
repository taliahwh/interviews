/**
 * Sliding Window Technique
 *
 * Start by initializing a Set because in JS, sets have O(1) look/insertion
 * and they only contain unique chars - no duplicates
 *
 * Also initialize a maxCount var, as well as a left pointer
 * to keep tracking of shrinking the window
 *
 * Iterate through string where right (i) will act as windowEnd
 * Using a while loop, we'll want to shrink the window as long as the current
 * char in the interation is already included in the set on unique chars
 *
 * In order to shrink the window we'll want to remove the curr char from the set
 * and increment the left pointer forward
 *
 * Once we make it outside of the while loop we'll know that each char id unique
 * and can continue expaning the window and using max val logic to compare length
 *
 * Return maxCount at the end of function
 */
const lengthOfLongestSubstring = (s) => {
  const set = new Set();
  let maxCount = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
};

const test1 = 'abcabcbb'; // -> 3
const test2 = 'bbbbb'; // -> 1
const test3 = 'pwwkew'; // -> 3
const test4 = 'dvdf'; // -> 3

console.log(lengthOfLongestSubstring(test1));
console.log(lengthOfLongestSubstring(test2));
console.log(lengthOfLongestSubstring(test3));
console.log(lengthOfLongestSubstring(test4));
