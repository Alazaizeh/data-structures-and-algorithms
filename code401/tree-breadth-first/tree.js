"use strict";
const Node = require("./node");

class Tree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    // root left right
    let result = [];

    let recursive = (node) => {
      result.push(node.value);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };

    recursive(this.root);

    return result;
  }

  postOrder() {
    // left -> right -> root
    let result = [];

    let recursive = (node) => {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      result.push(node.value);
    };

    recursive(this.root);

    return result;
  }

  inOrder() {
    // left -> root -> right
    let result = [];

    let recursive = (node) => {
      if (node.left) recursive(node.left);
      result.push(node.value);
      if (node.right) recursive(node.right);
    };

    recursive(this.root);

    return result;
  }

  breadthFirst() {
    let arr = [this.root];
    let result = [];

    let recursive = () => {
      if (arr.length > 0) {
        let node = arr.shift();
        let value = node.value;
        result.push(value);

        if (node.left == null && node.right == null) {
          recursive();
        }
        if (node.left != null) {
          arr.push(node.left);
        }

        if (node.right != null) {
          arr.push(node.right);
        }
        recursive();
      }
    };
    recursive();
    return result;
  }
}

module.exports = Tree;
