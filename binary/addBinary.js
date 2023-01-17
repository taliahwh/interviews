/**
 * Binary numbers are represented by only two digits: 0 and 1
 *
 * 1. We'll want to reverse our two input strings in order to iterate through and
 * add each number "backwards"
 *
 * 2. When construting the for loop, rememeber that the input strings can be of two different
 * lengths, so choose the max length between the two
 *
 * 3. Handle whether or not the current digit at each position is in bounds
 *
 * 4. Sum together digits and carry values
 *
 * 5. To find the base 2: total % 2 -> will return either 0 or 1
 *
 * 6. Add the value to result string, convert to string
 *
 * 7. Update carry value by diving the total by 2 -> will return either 0 or 1
 *
 * 8. If carry is non-zero, add a 1 to the result
 *
 * 9. Join arr, return reversed str
 * (adding char to front of string each iteration leads to O(n^2) time,
 * by pushing each digit to the end of result arr and converting to str/reversing
 * at the end, saves us a lot of time)
 */

const addBinary = (a, b) => {
  const strA = a.split('').reverse();
  const strB = b.split('').reverse();
  let result = [];
  let carry = 0;

  for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
    const digitA = Number(strA[i]) || 0;
    const digitB = Number(strB[i]) || 0;

    const total = digitA + digitB + carry;
    result.push(String(total % 2));

    carry = Math.floor(total / 2);
  }
  if (carry !== 0) result.push('1');
  const answer = result.reverse().join('');
  return answer;
};

const test1 = addBinary('11', '1');
const test2 = addBinary('1010', '1011');
const test3 = addBinary('111', '111');
console.log(test1);
console.log(test2);
console.log(test3);
