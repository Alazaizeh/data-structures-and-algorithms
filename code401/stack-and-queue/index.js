"use strict";

const Node = require("./node");
const Stack = require("./stack");
const { LinkedList } = require("./linkedList");
const Queue = require("./queue");

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue.front.value);
module.exports = { LinkedList };
