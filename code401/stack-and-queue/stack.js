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
    try {
      let oldTop = this.top;
      this.top = this.top.next;
      return oldTop.value;
    } catch (error) {
      throw "empty stack";
    }
  }
  peek() {
    if (!this.top) {
      throw "empty stack";
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
