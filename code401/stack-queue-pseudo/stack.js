"use strict";
const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      return;
    }

    node.next = this.top;
    this.top = node;
    return;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let oldTop = this.top;
    this.top = this.top.next;
    return oldTop.value;
  }
  peek() {
    if (!this.top) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }

    return false;
  }
}

module.exports = Stack;
