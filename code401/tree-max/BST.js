"use strict";
const Tree = require("./tree");
const Node = require("./node");
class BST extends Tree {
  add(value) {
    let node = new Node(value);

    if (this.root == null) {
      this.root = node;
    } else {
      this.getLocation(this.root, node);
    }
  }

  getLocation(currentNode, node) {
    if (node.value < currentNode.value) {
      if (currentNode.left == null) {
        currentNode.left = node;
      } else {
        this.getLocation(currentNode.left, node);
      }
    } else {
      if (currentNode.right == null) {
        currentNode.right = node;
      } else {
        this.getLocation(currentNode.right, node);
      }
    }
  }

  contains = (value) => (this.preOrder().indexOf(value) > 0 ? true : false);
}

module.exports = BST;
