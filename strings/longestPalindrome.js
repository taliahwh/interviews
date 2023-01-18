const longestPalindrome = (str) => {
  let max = 0;
  const charCount = {};

  for (let char of str) {
    // initialize hashmap and count char frequency
    if (!(char in charCount)) charCount[char] = 0;
    charCount[char]++;
    // look at value of char, if even number -> add 2 to max
    if (charCount[char] % 2 === 0) max += 2;
  }

  // if the length of str is greater than max, there's a single char
  // that can also be included in palindrome, update max and return
  if (str.length > max) max += 1;
  return max;
};

console.log(longestPalindrome('abccccdd')); // -> 7
console.log(longestPalindrome('a')); // -> 1
console.log(longestPalindrome('ddsssssa')); // -> 7
console.log(longestPalindrome('ccccaa')); // -> 6
