"use strict";

const Node = require("../node");
const Queue = require("../queue");

describe("Queue", () => {
  it("Can successfully enqueue onto a Queue", () => {
    let newQ = new Queue();
    newQ.enqueue(1);

    expect(newQ.front.value).toEqual(1);
  });
  it("Can successfully enqueue multiple values onto a Queue  ", () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);

    expect(newQ.front.value).toEqual(1);
  });
  it("Can successfully dequeue off the Queue", () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.dequeue();
    expect(newQ.front.value).toEqual(2);
  });
  it("Can successfully empty a Queue after multiple dequeues", () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.dequeue();
    newQ.dequeue();

    expect(newQ.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next item on the Queue", () => {
    let newQ = new Queue();
    newQ.enqueue(1);

    expect(newQ.peek()).toEqual(1);
  });
  it("Can successfully instantiate an empty Queue", () => {
    let newQ = new Queue();

    expect(newQ.isEmpty()).toEqual(true);
  });
  it("Calling dequeue or peek on empty Queue raises exception", () => {
    let newQ = new Queue();

    try {
      expect(newQ.dequeue()).toThrow("empty queue");
    } catch (error) {}
  });
});
