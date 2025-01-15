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
      return this.minDepth(node.right) + 1;
    }
    //if right node is null, recurse on the left child
    if (!node.right) {
      return this.minDepth(node.left) + 1;
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
    return Math.max(leftDepth, rightDepth) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node = this.root) {
    if (!node) return 0; // Base case: if node is null, sum is 0
    // Recursively calculate the sums of the left and right subtrees
    function sum(node) {
      if (!node) return 0; // Base case: if node is null, sum is 0
      return Math.max(
        node.val + Math.max(sum(node.left), sum(node.right), 0),
        0
      );
    }
    function sumInclusive(node) {
      if (!node) return 0; // Base case: if node is null, sum is 0
      return node.val + sum(node.left) + sum(node.right);
    }
    function sumExclusive(node) {
      if (!node) return 0; // Base case: if node is null, sum is 0
      return Math.max(
        sumExclusive(node.left),
        sumExclusive(node.right),
        sumInclusive(node)
      );
    }
    return Math.max(sumExclusive(this.root), sumInclusive(this.root));
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
    if (!node1 || !node2) return false; // Base case: if either node is null, they cannot be cousins
    if (node1 === node2) return false;
    // If nodes are the same, they cannot be cousins
    let root = this.root;

    if (node1 === node2.left || node1 === node2.right) return false;
    if (node2 === node1.right || node2 === node1.left) return false;

    let parent = null;

    function makeParent(current, node) {
      //if current is null, then return false
      if (!current) return false;
      //if node is null, then return false
      if (!node) return false;
      //if current node is the same as grandchild, return false
      if (node === current) return false;
      //if node is child of current, return current as parent
      if (node === current.left || node === current.right) {
        parent = current;
        return parent;
      }

      if (makeParent(current.left, node)) return parent;

      if (makeParent(current.right, node)) return parent;
      return false;
      //   return parent
    }
    //siblings case
    if (makeParent(root, node1) === makeParent(root, node2)) return false;

    function makeGrandparent(node) {
      let parent = makeParent(root, node);
      return makeParent(root, parent);
    }

    if (makeGrandparent(node1) === makeGrandparent(node2)) return true;
    else return false;
  }
  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    function stringify(node) {
      if (!node) return "null";

      return `${node.val}(${stringify(node.left)},${stringify(node.right)})`;
    }
    return stringify(tree.root);
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    function destringify(string) {
      if (string == "" || string == "null") return null;
      let root = new BinaryTreeNode(); //this probably breaks since there's no val
      if (string.indexOf("(") === -1) {
        root.val = parseInt(string.slice(0, string.length)); //fixme
        return root;
      }
      root.val = parseInt(string.slice(0, string.indexOf("(")));
      let count = 0;

      let childstring = string.slice(
        string.indexOf("(") + 1,
        string.length - 1
      );

      let i = 0;
      if (
        childstring.indexOf("(") < childstring.indexOf(",") &&
        childstring.indexOf("(") !== -1
      ) {
        for (i = 0; i < childstring.length; i++) {
          if (childstring[i] == "(") {
            count += 1;
          }
          if (childstring[i] == ")") {
            count -= 1;
            if (count === 0) {
              i += 1;
              break;
            }
          }
        }
      } else {
        i = childstring.indexOf(",");
      }

      root.left = destringify(childstring.slice(0, i));
      root.right = destringify(childstring.slice(i + 1));
      return root;
    }
    return new BinaryTree(destringify(stringTree));
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    //if nodes are empty, return undefined
    //if root is empty, return undefined
    let root = this.root;
    if (!root || !node1 || !node2) return undefined;

    function LCA(node, node1, node2) {
      if (!node) return undefined;
      if (node === node1 || node === node2) return node;

      let leftLCA = LCA(node.left, node1, node2);
      let rightLCA = LCA(node.right, node1, node2);

     
      if (leftLCA && rightLCA) return node;

      return leftLCA ? leftLCA : rightLCA;
    }
    return LCA(root, node1, node2);
  }
}
module.exports = { BinaryTree, BinaryTreeNode };
