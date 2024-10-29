/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  // build small tree

  sumValues() {
    if (!this.root) {
      return 0;
    }
    let total = 0;
    function sum(node) {
      
      total += node.val;
      for (let child of node.children) {
        sum(child)
      }
     
    }

    sum(this.root);
    return total;
  }
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }

    let count = 0;

    function evens(node) {
      if (node.val % 2 === 0) {
        count++;
      }
      for (let child of node.children) {
        evens(child);
      }
    }

    evens(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }
    let count = 0;
    function greater(node) {
      // count
      if (node.val > lowerBound) {
        count++;
      }
      // recurse
      for (let child of node.children) {
        greater(child);
      }
      return count;
    }
    return greater(this.root);
  }
}

module.exports = { Tree, TreeNode };
