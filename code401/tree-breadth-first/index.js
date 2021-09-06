"use strict";

const Tree = require("./tree");
const Node = require("./node");
const BST = require("./BST");

let two = new Node(2);
let two2 = new Node(2);
let seven = new Node(7);
let five = new Node(5);
let six = new Node(6);
let nine = new Node(9);
let five2 = new Node(5);
let eleven = new Node(11);
let four = new Node(4);
// [2,2,7,5,,6,9,5,11,4]

two.left = seven;
seven.left = two2;
seven.right = six;
six.left = five;
six.right = eleven;
two.right = five2;
five2.right = nine;
nine.left = four;
let tree = new Tree(two);

console.log(tree.breadthFirst());
