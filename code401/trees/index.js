"use strict";

const Tree = require("./tree");
const Node = require("./node");
const BST = require("./BST");

let bst = new BST(new Node(2));
bst.add(5);
bst.add(14);
bst.add(1);
bst.add(7);
bst.add(9);
console.log(bst.contains(14));
