// Convert Roman numerals to integer

/**
 * add all possible addition and subtraction conversions to hashmap
 * maintain a sum variable
 * iterate through loop and for each char, look in map and add it's val to sum
 * look at previous char + curr char, and if substring is in map -> substrack it from sum
 * return sum
 *
 * Time: O(n)
 * Space: O(n)
 */
const romanToInt = (s) => {
  let sum = 0;
  const conversions = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: -2,
    IX: -2,
    XL: -20,
    XC: -20,
    CD: -200,
    CM: -200,
  };

  for (let i = 0; i < s.length; i++) {
    // add single char's val to sum
    if (s[i] in conversions) sum += conversions[s[i]];

    // if substring (prev char + curr char) in string, add its val to sum
    if (i - 1 >= 0 && `${s[i - 1]}${s[i]}` in conversions)
      sum += conversions[`${s[i - 1]}${s[i]}`];
  }
  return sum;
};

// IV = 6 -> 4 (-2)
// IX = 11 -> 9 (-2)
// XL = 60 -> 40 (-20)
// XC = 110 -> 90 (-20)
// CD = 600 -> 400 (-200)
// CM = 1100 -> 900 (-200)

const test1 = 'III';
const test2 = 'LVIII';
const test3 = 'MCMXCIV';

console.log(romanToInt(test1)); // 3
console.log(romanToInt(test2)); // 58
console.log(romanToInt(test3)); // 1994
