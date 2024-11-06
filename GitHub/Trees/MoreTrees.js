const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

  // build large tree
  let n = new BinaryTreeNode(1);
  let left = new BinaryTreeNode(-1);
  let right = new BinaryTreeNode(-1);
  
  n.left = left;
  n.right = right;



  let negativeTree = new BinaryTree(n);
  console.log(negativeTree.maxSum());
 