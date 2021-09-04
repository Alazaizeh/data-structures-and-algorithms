"use strict";

const Node = require("../node");
const Stack = require("../stack");

describe("Stack", () => {
  it("Can successfully push onto a stack", () => {
    let newStack = new Stack();
    newStack.push(1);

    expect(newStack.top.value).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack  ", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);

    expect(newStack.top.value).toEqual(2);
  });
  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    expect(newStack.top.value).toEqual(1);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();
    newStack.push(1);

    expect(newStack.peek()).toEqual(1);
  });
  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();

    expect(newStack.isEmpty()).toEqual(true);
  });

  it("Can max return the maximum number in stack", () => {
    let newStack = new Stack();
    newStack.push(2);
    newStack.push(1);
    newStack.push(4);
    newStack.push(3);
    expect(newStack.max).toEqual(4);
    newStack.pop();
    expect(newStack.max).toEqual(4);
    newStack.pop();
    expect(newStack.max).toEqual(2);
  });
});
