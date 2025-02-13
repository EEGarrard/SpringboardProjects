const { throwStatement } = require("@babel/types");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) {
        return undefined;
      }

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
 function insert(node) {
      if (node === null) {
        return newNode;
      }
      if (val === node.val) {
        return null;
      }

      if (val < node.val) {
        node.left = insert(node.left);
      } else {
        node.right = insert(node.right);
      }
      return node;
    }
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root = insert(this.root);
    }
    return this;
  }
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) {
        return current;
      }

      if (val < current.val) {
        if (!current.left) {
          return undefined;
        }
        if (val === current.left.val) {
          return current.left;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) {
          return undefined;
        }
        if (val === current.right.val) {
          return current.right;
        }
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined;
    }
    function findNode(node) {
      if (node === null) {
        return undefined;
      }

      if (val === node.val) {
        return node;
      }

      if (val < node.val) {
        if (!node.left) {
          return undefined;
        }
        return findNode(node.left);
      }
      if (val > node.val) {
        if (!node.right) {
          return undefined;
        }
        return findNode(node.right);
      }
    }

    return findNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    if (node === null) {
      return visited;
    }
    visited.push(node.val);
    this.dfsPreOrder(node.left, visited);
    this.dfsPreOrder(node.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (node === null) {
      return visited;
    }
    this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    this.dfsInOrder(node.right, visited);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (node === null) {
      return visited;
    }

    if (node.left) this.dfsPostOrder(node.left, visited);

    if (node.right) this.dfsPostOrder(node.right, visited);
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root, visited = []) {
    if (!node) {
      return visited;
    }
    let queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      visited.push(node.val);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let node = this.root;
    let parent = null;

    //find the node that has the value to be removed
    while (node !== null && val !== node.val) {
      parent = node;

      if (val < node.val) {
        node = node.left;
        continue;
      }
      if (val > node.val) {
        node = node.right;
        continue;
      }
    }

    //If the node is null, return undefined
    if (!node) {
      return;
    }

    //If the node has no children, remove the node
    if (node.left === null && node.right === null) {
      if (node === this.root) {
        this.root = null;
        return;
      } else if (node === parent.left) {
        parent.left = null;
        return;
      } else {
        parent.right = null;
      }
    }

    //if the node has one child, remove the node and connect the node's parent to the node's child
    else if (node.left === null || node.right === null) {
      let child = node.left ? node.left : node.right;
      if (node === this.root) {
        this.root = child;
      } else if (node === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
      if (node === null) {
        return;
      }
    }

    //if the node has two children, connect the node's parent to the greatest  of the subtrees
    else {
      // if (node === parent.left) {
      //   let child = node.right;
      //   if (!child.left && !child.right) {
      //     parent.left = child;
      //     child.left = node.left;
      //     return;
      //   }
      //   let leftChildren = child.left;
      //   if (!leftChildren) {
      //     parent.left = child;
      //   }
      //   while (leftChildren.left) {
      //     leftChildren = leftChildren.left;
      //   }
      //   if (leftChildren.right) {
      //     let rightC = leftChildren.right;

      //   }

      //   leftChildren = parent.left;

      //   leftChildren.right = child;
      //   leftChildren.left = node.left;
      // }
      // if (node === parent.right) {
      //   let child = node.right;
      //   let leftChildren = child.left;
      //   if (!leftChildren) {
      //     parent.right = child;
      //     child.left = node.left;
      //     child.right = node.right;
      //     return;
      //   }
      //   if(leftChildren.left) {
      //   while (leftChildren.left) {
      //     let LCP = leftChildren
      //     leftChildren = leftChildren.left;
      //   }}
      //   if (leftChildren.right) {
      //     let rightC = leftChildren.right;
      //     rightC = leftChildren;
      //   }
      //   parent.right = leftChildren;

      //   leftChildren.right = child;
      //   leftChildren.right = parent.right.right;
      let LRC = node.right;
      let LRCparent = node;
      if (!LRC.left) {
        LRC.left = node.left;
      } else {
        while (LRC.left) {
          LRCparent = LRC;
          LRC = LRC.left;
        }
        LRCparent.left = LRC.right;
        LRC.left = node.left;
        LRC.right = node.right;
      }
      if (this.root === node) {
        this.root = LRC;
      } else if (parent.left === node) {
        parent.left = LRC;
      } else {
        parent.right = LRC;
      }
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    function height(node) {
      if (!node) {
        return 0;
      }
      return Math.max(height(node.left), height(node.right)) + 1;
    }
    function checkBalance(node) {
      if (!node) return true;

      if (Math.abs(height(node.left) - height(node.right)) > 1) return false;

      if (checkBalance(node.left) && checkBalance(node.right)) return true;
      return false;
    }
    return checkBalance(this.root);
  }
  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
    if (!this.root) return undefined;
    if (!this.root.left && !this.root.right) return undefined;
    let node = this.root;
    if (node.right) {
      let first = node.right;
      let second = node;
      while (first.right) {
        first = first.right;
        second = second.right;
      }
      return second.val;
    } else {
      let second = this.root.left;
      while (second.right) {
        second = second.right;
      }
      return second.val;
    }
  }
}

module.exports = BinarySearchTree;
