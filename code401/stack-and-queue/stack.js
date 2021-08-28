"use strict";
const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    return this.top;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    }

    this.top.next = node;
    node.next = this.top;
    this.top = node;
    return;
  }
}

module.exports = Stack;
