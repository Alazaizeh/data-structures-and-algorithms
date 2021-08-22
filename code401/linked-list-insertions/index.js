"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;

    return;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let nodeString = "";
    let current = this.head;
    while (current) {
      nodeString += `{${current.value}} -> `;
      current = current.next;

      if (current == null) {
        nodeString += `NULL`;
      }
    }
    return nodeString;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    let current = this.head.next;

    if (this.head.value == value) {
      node.next = this.head;
      this.head = node;
      return;
    } else {
      while (current) {
        if (current.value == value) {
          node.next = current;
          tail.next = node;
          return;
        }
        tail = current;
        current = current.next;
      }
    }
    return;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current) {
      if (current.value == value) {
        node.next = current.next;
        current.next = node;
        return true;
      }
      current = current.next;
    }

    current.next = node;
    return;
  }
}

let myList = new LinkedList();

myList.append("Jack");
myList.append("Albert");
myList.append("John");

myList.insertBefore("Jack", "before");
myList.insertAfter("John", "after");

console.log(myList);
console.log(`includes("John") =>`, myList.includes("John"));
console.log(`includes("Alfred") =>`, myList.includes("Alfred"));

console.log(myList.toString());

module.exports = LinkedList;
