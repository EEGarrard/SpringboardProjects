class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function destringify(string) {
  if (string == "" || string == "null") return null;
  let root = new BinaryTreeNode(); //this probably breaks since there's no val
  if (string.indexOf("(") === -1) {
    root.val = parseInt(string.slice(0, string.length)); //fixme
    return root;
  }
  root.val = parseInt(string.slice(0, string.indexOf("(")));
  let count = 0;

  let childstring = string.slice(string.indexOf("(") + 1, string.length - 1);

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
// console.log(destringify("25"));
// console.log(destringify("1(2(4,7),3)")); // returns the root of the binary tree.
console.log(destringify(""));
console.log(destringify("1"));
console.log(destringify("1(2,null)"));
let test = destringify("1(null,2(null,3))");


  function stringify(node) {
    if (!node) return "null";

    return `${node.val}(${stringify(node.left)},${stringify(node.right)})`;
  }
  


console.log(stringify(test));