/**
 * A binary tree in which the height of the left and right subtree of any node
 * do not differ by more than one
 * (Also referred to as a height-balanced binary tree)
 *
 * A balanced binary tree must be balanced at each node, as opposed to just the
 * left and right subtrees from the root.
 *
 * To solve this we will use recursion and bubble up from each leaf node.
 * Each leaf node is to be considered balanced, with a height of 0.
 *
 * |leftSubtreeHeight - rightSubtreeHeight| <= 1
 */
const balancedBinaryTree = (root) => {
  let balanced = true;

  const findHeight = (root) => {
    if (!root) return 0; // base case -> leaf node
    if (!balanced) return; // early exit

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);
    let diff = Math.abs(leftHeight - rightHeight);

    if (diff > 1) balanced = false;
    // not sure why we need to return the height
    return Math.max(leftHeight, rightHeight) + 1;
  };
  findHeight(root);
  return balanced;
};
