const sumPossible = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];

  // base cases
  if (target === 0) return true;
  if (target < 0) return false;

  // recusrive call -> iterate through numbers arr and call function by decrementing curr num from target
  // recursive function will continue to decrement until it reaches either base case
  // store returned value in memo for future reference
  for (let num of numbers) {
    if (sumPossible(target - num, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }

  // if we make it out of recursive function without hitting the if statement
  // store false result in memo for future subProblems and return false to caller
  memo[target] = false;
  return false;
};

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false
console.log(sumPossible(12, [])); // -> false
console.log(sumPossible(271, [10, 8, 265, 24])); // -> false
console.log(sumPossible(13, [3, 5]));
