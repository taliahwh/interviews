/**
 * A naive solution would be to use DFS which would lead to a O(2^n) time complexity because
 * we would have to recompute multiple decisions n times
 *
 * A more efficient solution is to use dynamic programming -> cache each result, also
 * known as memoization. This cuts both the time and space compelxity down to O(n)
 *
 * Bottom Up - Dynamic Programming Approach
 */
const climbStairs = (n, memo = {}) => {
  if (n === 5) return 1;
  if (n > 5) return 0;

  if (n in memo) return memo[n];

  let count = 0;
  for (let num of n) {
    count += climbStairs();
  }
  return count;
};
