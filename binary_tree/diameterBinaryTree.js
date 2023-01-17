/**
 * The diamater of a binary tree is the LENGTH OF LONGEST PATH BETWEEN TWO NODES.
 * The nodes do not have to pass through the root.
 * Length of a path is the represented by EDGES, not nodes.
 *
 * If we were simply finding the diameter of a binary tree through the root, we could
 * add togather the longest path from either side.
 * Since the maxDiameter of the tree could be on any node that isn't the root, we'll have to
 * maintain a MAX var that keeps track of the largest path we've seen between the left + right
 * paths.
 *
 * This soltion is a spin off of a longestPath algorithm
 *
 * Time: O(n)
 * Space O(n) -> in the worst case, we will traverse the height of the tree
 * (if the tree was balanced, the Space Complexity would be O(logn))
 */
const diameterOfBinaryTree = (root) => {
  if (!root) return 0;

  let maxDiameter = 0;

  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    // return max of either left or right side, + 1 to account for current level
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return maxDiameter;
};
