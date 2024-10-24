// Define a Node class to represent each node in the tree
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
// Depth-first traversal
   findDFS(val) {
     const toVisitStack = [this];
     while (toVisitStack.length) {
       const current = toVisitStack.pop();
       console.log("Visiting:", current.val)
       if (current.val === val) {return current};
    
     for (let child of current.children) {
       toVisitStack.push(child);
     }}
  }
  // Breadth-first traversal
  findBFS(val) {
    const toVisitQueue = [this];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      console.log("Visiting:", current.val)
      if (current.val === val) {return current};
    
    for (let child of current.children) {
      toVisitQueue.push(child);
    }}
  }
}

class Tree {
    constructor(root) {
      this.root = root;
    }
    findinTreeDFS(val){
        this.root.findDFS(val)
    }
    findinTreeBFS(val){
        this.root.findBFS(val)
    }
}


// let amy = new Node('amy');
// let bob = new Node('bob');
// let barb = new Node('barb');
// let barry = new Node('barry');

// amy.children.push(bob);
// amy.children.push(barb);
// amy.children.push(barry);
// console.log(JSON.stringify(amy.children));

// Create a recursive function to traverse the tree
let amy = new Node("amy", [
  new Node("bob"),
  new Node("barb"),
  new Node("barry"),
]);

console.log(JSON.stringify(amy));

let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li"), new Node("li2")])]),
]);

// console.log(htmlEl.findDFS('ul'));
console.log(htmlEl.findBFS('li'))
console.log(htmlEl.findDFS('li'))
//          html
//      head     body
//  title             ul
//                li     li2