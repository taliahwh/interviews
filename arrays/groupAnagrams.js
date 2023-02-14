// Time: O(n log n * n) -> sorting where n equals each str
// Space: O(n) ??
const groupAnagrams = (strs) => {
  let index = 0; // keeps track of where to place str in output arr
  const map = {}; // will hold all unique sorted strs
  const output = []; // 2d arr to be returned

  for (let i = 0; i < strs.length; i++) {
    // sort each str in ascending order
    const sortedStr = strs[i].split('').sort().join('');

    // check if sorted str already appears in hashmap
    // if it DOES NOT ->
    // - add it along with current index { sortedStr: index }
    // - init an empty arr at current index
    // - push the unsorted str into newly initialized arr
    // - increment index for the next time we find a unique sorted str

    // if it DOES appear in hashmap ->
    // - extract the index needed to push into the
    // already existing subarray from the hashmap
    // - push unsorted str at that index

    if (!(sortedStr in map)) {
      map[sortedStr] = index;

      output[index] = [];
      output[index].push(strs[i]);

      index++;
    } else {
      const indexToPush = map[sortedStr];
      output[indexToPush].push(strs[i]);
    }
  }
  return output;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['a']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['map', 'pan']));
