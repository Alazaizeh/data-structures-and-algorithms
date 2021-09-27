"use strict ";
const Tree = require("../Tree");
const Node = require("../Node");
const treeIntersection = require("../index");

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
let tree1 = new Tree(one);

let one2 = new Node(1);
let two2 = new Node(2);
let three2 = new Node(3);
let four2 = new Node(4);
let five2 = new Node(5);
let six2 = new Node(6);
let seven2 = new Node(7);

one2.left = two2;
one2.right = three2;
three2.left = four2;
three2.right = five2;
two2.left = six2;
six2.right = seven2;

let tree2 = new Tree(one2);

describe("trees Intersection function", () => {
  it("Successfully finds Intersection between two binary trees", () => {
    expect(treeIntersection(tree1, tree2)).toEqual(
      expect.arrayContaining(["7", "5", "1", "3", "6", "4", "2"])
    );
  });

  it("Successfully finds Intersection between two binary trees", () => {
    six2.right = null;

    expect(treeIntersection(tree1, tree2)).toEqual(
      expect.arrayContaining(["5", "1", "3", "6", "4", "2"])
    );
  });
  it("Successfully finds Intersection between two binary trees", () => {
    two2.left = null;
    expect(treeIntersection(tree1, tree2)).toEqual(
      expect.arrayContaining(["5", "1", "3", "4", "2"])
    );
  });
});
