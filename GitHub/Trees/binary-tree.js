/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    //if tree is empty, return 0
    if (!node) return 0;
    //if node is a leaf, return 1
    if (!node.left && !node.right) return 1;
    //if left node is null, recurse on the right child
    if (!node.left) {
        return this.minDepth(node.right) += 1;
    }
    //if right node is null, recurse on the left child
    if (!node.right) {
        return this.minDepth(node.left) += 1;
     }
     //if both children exist, return the minimum of the two depths
     return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
 }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
 
  maxDepth(node = this.root) {
    if (!node) return 0; //Base case: if node is null, depth is 0
    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node = this.root) {
    if (!node) return 0; // Base case: if node is null, sum is 0
    const leftSum = this.maxSum(node.left);
    const rightSum = this.maxSum(node.right);
    return Math.max(node.val + leftSum, node.val + rightSum);

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    const searchTree = (node) => {
      if (!node) return;

      // If the current node's value is greater than lowerBound
      if (node.val > lowerBound) {
        // Update result if it's null or if we found a smaller valid value
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      // Continue searching in the left subtree (for smaller values)
      searchTree(node.left);
      // Continue searching in the right subtree (for larger values)
      searchTree(node.right);
    };

    // Start the search from the root
    searchTree(this.root);

    return result; // Return the smallest value found, or null if none found
  }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!node1 ||!node2) return false; // Base case: if either node is null, they cannot be cousins

    // If nodes are the same, they cannot be cousins
    if (node1 === node2) return false;

  
    if (node1.parent === node2.parent) return false;

    
    return true;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };