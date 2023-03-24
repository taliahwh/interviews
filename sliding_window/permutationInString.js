const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  // build frequency map for s1 to get the required chars and their nums
  const neededChar = {};
  for (let char of s1) {
    if (!(char in neededChar)) neededChar[char] = 0;
    neededChar[char]++;
  }

  let left = 0; // windowStart
  let right = 0; // windowEnd
  let requiredLength = s1.length; // length of substring required in s2

  while (right < s2.length) {
    // if current char in s2 exists in hashmap, we want to decremenet the required length
    if (neededChar[s2[right]] > 0) requiredLength--;

    // we decrease the count of current char in map (even if it does not appear) because we only
    // care about the required chars
    neededChar[s2[right]]--;

    // at this point we can extend the window by one
    right++;

    // check if requiredLength is 0, we have found a valid permutation
    if (requiredLength === 0) return true;

    // if at any time the window is larger than k (s1.length), we want to remove from the start (left)
    // check if the letter we're removing is actually in the map, and if it is we'll want to increase the
    // length, as well as the count of that char in the hashmap
    if (right - left === s1.length) {
      if (neededChar[s2[left]] >= 0) requiredLength++;
      neededChar[s2[left]]++;

      // shrink the window by incrementing left pointer
      left++;
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('cat', 'carcabche'));
console.log(checkInclusion('cat', 'he'));
console.log(checkInclusion('house', 'llllllllllhouselllll'));
