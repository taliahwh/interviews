/**
 * In a BST, we know that all values less than the root are in the left subtree,
 * and all values greater than the root are in the right subtree. LCA says that a node
 * is allowed to be a descendant of itself, meaning (???)
 *
 * To solve using recursion, we'll know that if p and q are different subtrees then the
 * LCA must be the root, because it is the lowest point that contains both nodes.
 *
 * The recurisve call will traverse through the BST depending on the values of p and q,
 * and return the current node (root).
 */

//  Time: O(n)
// Space: O(n) -> call stack
const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    // p & q in left subtree
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    // p & q in right subtree
    return lowestCommonAncestor(root.right, p, q);
  }
  return root; // p & q in different subtrees
};

//  Time: O(n)
// Space: O(1)
const lowestCommonAncestor2 = (root, p, q) => {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      // p & q in left subtree
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      // p & q in right subtree
      root = root.right;
    } else {
      // p & q in different subtrees
      break;
    }
  }
  return root;
};
