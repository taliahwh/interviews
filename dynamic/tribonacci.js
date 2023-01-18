const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];

  // base cases
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  // make recursive call and store value in memo
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  return memo[n];
};

console.log(tribonacci(0)); // -> 0
console.log(tribonacci(1)); // -> 0
console.log(tribonacci(2)); // -> 1
console.log(tribonacci(5)); // -> 4
console.log(tribonacci(7)); // -> 13
console.log(tribonacci(14)); // -> 927
console.log(tribonacci(37)); // -> 1132436852
