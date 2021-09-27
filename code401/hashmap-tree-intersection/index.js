const HashTable = require("./HashTable");
const Tree = require("./Tree");
const Node = require("./Node");

function treeIntersection(t1, t2) {
  let Intersection = [];
  t1 = t1.inOrder();
  t2 = t2.inOrder();
  let myHash = new HashTable(t1.length + t2.length);

  t1.forEach((element) => {
    myHash.add(`${element}`, `${element}`);
  });
  t2.forEach((element) => {
    myHash.add(`${element}`, `${element}`);
  });
  myHash.map.forEach((data, i) => {
    if (data.values().length > 1) {
      Intersection.push(data.values()[0]);
    }
  });

  return Intersection.map((ele) => Object.keys(ele))
    .join(" ")
    .split(" ");
}

module.exports = treeIntersection;
