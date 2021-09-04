"use strict";

const PseudoQueue = require("../pseudoQueue");

describe("PseudoQueue", () => {
  it("Can successfully enqueue onto a Queue", () => {
    let newQ = new PseudoQueue();
    expect(newQ.enqueue(1)).toEqual(true);
  });
  it("Can successfully enqueue multiple values onto a Queue  ", () => {
    let newQ = new PseudoQueue();
    newQ.enqueue(1);
    newQ.enqueue(2);

    expect(newQ.enqueue(2)).toEqual(true);
  });
  it("Can successfully dequeue off the Queue", () => {
    let newQ = new PseudoQueue();
    newQ.enqueue(1);
    newQ.enqueue(2);

    expect(newQ.dequeue()).toEqual(1);
  });
});
