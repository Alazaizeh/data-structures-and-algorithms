"use strict";
const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return true;
  }
  dequeue() {
    if (this.stack2.peek()) {
      this.stack2.pop();
      return this.stack2.peek();
    }
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.pop();
    return this.stack2.peek();
  }
}

module.exports = PseudoQueue;
