"use strict";
const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      return;
    }

    let current = this.front;
    while (current.next) {
      current = current.next;
    }
    current.next = node;

    return;
  }

  dequeue() {
    if (!this.front) {
      throw " empty queue";
    }
    let oldFront = this.front;
    this.front = this.front.next;
    return oldFront.value;
  }

  peek() {
    if (!this.front) {
      throw " empty queue";
    }

    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    }

    return false;
  }
}
module.exports = Queue;
