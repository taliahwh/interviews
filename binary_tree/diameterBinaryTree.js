/**
 * The diamater of a binary tree is the LENGTH OF LONGEST PATH BETWEEN TWO NODES.
 * The nodes do not have to pass through the root.
 * Length of a path is the represented by EDGES, not nodes.
 */
const diameterBinaryTree = (root) => {
  if (!root) return 0;

  let max = 0;

  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    max = Math.max(max, left + right);

    // return max of either left or right side, + 1 to account for current level
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return max;
};
