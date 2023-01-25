/**
 * Intuitive Solution -> thought process
 * A matrix is essentially a grid, where each cell contains a value of the same data type (num, str, etc.)
 *
 * The problem asks us to find the distance of nearest ADJACENT 0 cell, so that immediately calls to mind
 * a BREADTH FIRST SEARCH, sicne a DFS will iterate to the end in each direction
 *
 * I'm thinking: Iterate over each cell, if the current row is not already in the output array, init a new arr
 * - Perform a BFS on each cell, keeping track of a visited set as to not interate over a single cell more than once
 * - maintain track of curr pos as well as distance from starting node
 * - when the BFS finds a cell that is 0, push its distance into output arr, continue with next iteration
 * --> pushing that distance into the output arr
 *
 * Time: O(n^2) -> n == m*n
 * Space: O(n)
 *
 * ------------------------------------------------------------------------------------------------
 *
 *
 * BFS Solution -> Target to Source (0 -> 1)
 * Instead of performing a BFS on each 1 in matrix which would lead to an exponential runtime,
 *
 * Loop over the matrix and find all zeroes first.
 * Add those to a queue and starts a class BFS, keeping track of the r, c, and distance
 * Instead of using a visited set, mark the 1's as infinity as we don't want to get confused with future 1's
 *
 */

const updateMatrix = (matrix) => {
  const queue = [];

  // Find all 0's in matric
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        queue.push([r, c, 0]);
      } else {
        matrix[r][c] = Infinity;
      }
    }
  }

  // helper arr to find neighbors in a quicl forEach loop
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Perform BFS
  while (queue.length) {
    const [r, c, distance] = queue.shift();

    // rewrite value if we find it's greater than current (like those infinities)
    if (matrix[r][c] > distance) {
      matrix[r][c] = distance;
    }

    // look at all neighbor positions: is it inbounds? has it not been visited yet? (infinity?)
    // if yes to both -> add to queue, increasing distance by 1
    dir.forEach((delta) => {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = deltaRow + r;
      const neighborCol = deltaCol + c;
      const rowInbounds = 0 <= neighborRow && neighborRow < matrix.length;
      const colInbounds = 0 <= neighborCol && neighborCol < matrix[0].length;

      if (
        rowInbounds &&
        colInbounds &&
        matrix[neighborRow][neighborCol] === Infinity
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    });
  }
  return matrix;
};

const mat1 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

const mat2 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(updateMatrix(mat1));
console.log(updateMatrix(mat2));
