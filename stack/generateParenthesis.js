/**
 *
 * Examples
 * n = 1
 *  ()
 *
 *  n = 2
 *  (())
 *  ()()
 *
 *  n = 3
 *  ((()))
 *  (()())
 *  (())()
 *  ()(())
 *  ()()()
 *
 * This solution uses backtracking and a str to keep track
 * of each potential output in the decision tree.
 *
 * An output is a valid parenthesis if both the open '(' and close ')' are the equal to n
 * We can add an open parenthesis as long as the openCount < n
 * We can only add a closed parenthesis if the closeCount < n
 *
 * Time:
 * Space:
 */
const generateParenthesis = (n) => {
  const output = [];

  const backtracking = (openCount, closeCount, str) => {
    // base case: check if stack contains valid parenthesis -> push str into output
    if (openCount === n && closeCount === n) {
      output.push(str);
      return;
    }

    // check if openCount < n -> add '(' onto str, increment openCount in recursive call
    if (openCount < n) {
      backtracking(openCount + 1, closeCount, `${str}(`);
    }

    // check if closeCount < openCout -> add ')' onto str, increment closeCount in recursive call
    if (closeCount < openCount) {
      backtracking(openCount, closeCount + 1, `${str})`);
    }
  };
  // make recursive call with counts init at 0 and an empty str
  backtracking(0, 0, '');

  return output;
};

console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
