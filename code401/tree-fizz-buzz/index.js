"use strict";

const Tree = require("./tree");
const Node = require("./node");
const BST = require("./BST");

let fizzBuzz = (tree) => {
  if (tree.root == undefined) {
    return "Empty Tree";
  }
  let recursive = (node) => {
    if (node.value % 15 == 0) {
      node.value = "FizzBuzz";
    } else if (node.value % 3 == 0) {
      node.value = "Fizz";
    } else if (node.value % 5 == 0) {
      node.value = "Buzz";
    } else {
      node.value = "" + node.value;
    }
    if (node.left) recursive(node.left);
    if (node.right) recursive(node.right);
  };

  recursive(tree.root);

  return tree;
};

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
let t = new Tree(one);

console.log(fizzBuzz(t));

module.exports = fizzBuzz;
