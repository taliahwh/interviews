const decodeString = (s) => {
  const stack = []; // [word : count]
  const numbers = '0123456789';
  let num = '';
  let tempWord = '';

  for (let char of s) {
    if (numbers.includes(char)) {
      num = `${num}${char}`;
    } else if (char === '[') {
      stack.push([tempWord, num]);
      tempWord = '';
      num = '';
    } else if (char === ']') {
      const [prevStr, multiplier] = stack.pop();
      tempWord = prevStr + tempWord.repeat(multiplier);
    } else {
      // letter
      tempWord = `${tempWord}${char}`;
    }
  }
  return tempWord;
};

const test1 = decodeString('3[a]2[bc]');
console.log(test1);
console.log(test1 === 'aaabcbc');

const test2 = decodeString('3[a2[c]]');
console.log(test2);
console.log(test2 === 'accaccacc');

const test3 = decodeString('2[abc]3[cd]ef');
console.log(test3);
console.log(test3 === 'abcabccdcdcdef');
