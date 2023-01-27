// Backtracking & Recursive Solution
// Time: ??
// Space: ??
// const combinationSum = (candidates, target) => {
//   // No candidates -> no results
//   if (!candidates) return [];

//   // Store all the possible combinations here
//   const paths = [];

//   // The recursive function
//   // "t" is the target we're looking for. It will become smaller deeper into the recursive call
//   // "p" is where we will record out current path
//   // "i" is the index of the numbers we're considering

//   const dfs = (t, p, i) => {
//     // check console to get a feel for the order of execution in recursion
//     console.log('considering:', t, p, i);

//     if (t === 0) {
//       // we found a valid path, so store that in the paths arr
//       paths.push(p);
//       return;
//     } else if (t < 0) {
//       console.log('Invalid path');
//       return;
//     } else {
//       // increment i as long as it is less than the candidates arr length

//       while (i < candidates.length && t - candidates[i] >= 0) {
//         // Use candidates[i] to lower out target, and record the candidates in the path
//         // We are using the spread operator to clone the path arr, or else it will contaminate futute paths
//         dfs(t - candidates[i], [...p, candidates[i]], i);

//         // "Lose" candidates[i]: Still unsure about this part
//         i++;
//       }
//     }
//   };

//   // Call our recursive function, with an empty arr and 0 index as out init parameters
//   dfs(target, [], 0);

//   return paths;
// };

// console.log(combinationSum([2], 7));

// -----------------------------------------------------------

const combinationSum2 = (
  candidates,
  target,
  index = 0,
  cur = [],
  combos = []
) => {
  // base cases
  if (target <= 0) {
    // if we've reached the target, push a copy of cur array into combos ourput arr
    // if we've exceed the target, return out of the recursive function in order to increment index
    if (target === 0) combos.push(cur.slice());
    return;
  }

  // perform recursive function while the index isn't greater than length of candidates arr
  if (index < candidates.length) {
    // make the recursive call:
    // by keeping the index as is initially, we make sure to repeat each value until it reaches or exceeds the target
    // before calling the recursive function, add the value into the cur arr
    // we know from out base cases that this function will ultimately be exited
    const value = candidates[index];
    cur.push(value);
    combinationSum2(candidates, target - value, index, cur, combos);

    // after the first recursive call is executed, we will want to continue iterating through the candidates arr
    // until every possible combination is tested
    // remove the the last number added to cur arr before making a second recursive call, moving the index forward
    cur.pop();
    combinationSum2(candidates, target, index + 1, cur, combos);
  }

  return combos;
};

console.log(combinationSum2([1, 2, 3], 4));
