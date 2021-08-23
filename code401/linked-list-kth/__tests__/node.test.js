"use strict";

const Node = require("../node");

describe("Node", () => {
  it("should create new node using constructor(value)", () => {
    let newNode = new Node(100);
    expect(newNode.value).toEqual(100);
    expect(newNode.next).toBeNull();
  });
});
