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

  maximum() {
    if (this.root == undefined) {
      return "Empty Tree";
    }

    let max = this.root.value;
    let recursive = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };

    recursive(this.root);

    return max;
  }
}

module.exports = Tree;
