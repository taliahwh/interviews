// Time: O(n)
// Space: O(n)
const backspaceCompare = (s, t) => {
  const res1 = [];
  const res2 = [];

  // if char is not '#' -> push into result : pop
  for (let char of s) {
    if (char !== '#') res1.push(char);
    else res1.pop();
  }

  for (let char of t) {
    if (char !== '#') res2.push(char);
    else res2.pop();
  }
  return res1.join('') === res2.join('');
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a#c', 'b'));
