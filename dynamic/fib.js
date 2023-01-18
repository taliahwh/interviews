/**
 * Most times there are two ways to build dynammic programming algortihms:
 * DFS and recursion with memoization. When solving, it's best to create a decision
 * tree and consider each leaf node as a base case. Using backtracking, bubble up each
 * return result to help build the logic for your algorithm.
 *
 * Because of the repeated subproblems within the decision tree, a simple DFS without any
 * memoization will lead to an O(2^n) time complexity. Space will be the height of the tree, O(n)
 *
 * Memoization, or caching each subresult, is an efficient way to save time in the algorithm.
 * With each recursive call the caller will check the memo (hashmap) to see if the current element
 * has appeared before. If it has, it will return its result (key value pair).
 *
 * Here's a way to think of structuring DP problems:
 * 1. Initialize the memo as an optional parameter. In JS, use an object as it has O(1) lookup/insertion
 * 2. Check if the current element appears in the memo. If it has, return its result.
 * 3. Consider your base cases / edge cases and what value they should return
 * 4. Make your recursive call, storing that value in the memo at the current n position: memo[n]
 * 5. Finally, return memo[n]
 *
 * Time: O(n)
 * Space: O(n)
 */

const fib = (n, memo = {}) => {
  // check if value already appears in memo
  if (n in memo) return memo[n];

  // consider base cases
  if (n === 0 || n === 1) return n;

  // make recursive call and store value in memo,
  // remember to include memo in function in order to share data
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  // return value
  return memo[n];
};
