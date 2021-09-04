"use strict";
const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
    this.max = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.max = node.value;
      return;
    }
    if (node.value > this.max) {
      this.max = node.value;
    }
    node.next = this.top;
    this.top = node;
    return;
  }

  pop() {
    if (!this.top) {
      throw "empty stack";
    }
    if (this.top.value == this.max) {
      let oldTop = this.top;
      this.top = this.top.next;
      if (!this.top) {
        this.max = null;
        return oldTop.value;
      }
      this.max = this.top.value;
      let current = this.top;
      while (current) {
        if (current.value > this.max) {
          this.max = current.value;
        }
        current = current.next;
      }
      return oldTop.value;
    }
    let oldTop = this.top;
    this.top = this.top.next;
    return oldTop.value;
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

let newStack = new Stack();

newStack.push(1);
newStack.push(5);
newStack.push(3);
newStack.push(2);
newStack.push(9);
newStack.pop();
console.log(newStack.max);
module.exports = Stack;
