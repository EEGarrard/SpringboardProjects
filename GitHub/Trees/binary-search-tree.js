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
    
      }
      else {
        node.right = insert(node.right);
      }
      return node;
    }
    if (!this.root) {
        this.root = newNode;
        
      }
      else {
        this.root = insert(this.root);
      }      return this
  }
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    
    if (!this.root) {
       return undefined
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
        if(val === current.left.val) {
            return current.left;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) {
          return undefined
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
    
      
    return findNode(this.root)
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

  dfsInOrder() {
    if (node === null) {
        return visited;
    }
    
    this.dfsPreOrder(node.left, visited);
    visited.push(node.val);
    this.dfsPreOrder(node.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    if (node === null) {
        return visited;
    }
    console.log(node.val);
    if(node.left)
        this.dfsPostOrder(node.left);
    
    if(node.right) 
        this.dfsPostOrder(node.right);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
