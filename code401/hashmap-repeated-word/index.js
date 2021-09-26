"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
//charCodeAt() a = 97, z = 122
class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    //20
    // sam
    // s ascii code is 83
    // a ascii code is 97
    // m ascii code is 109
    let hash =
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0) *
        599) %
      this.size;

    // 83 + 97 + 109 = 320
    // 320 * 599 = 24480
    // 24480 % 50 = 24

    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    // we need to make sure that the key is unique

    let bucket = { [key]: value };
    this.map[hash].add(bucket);
  }

  get(key) {
    let Ele = this.map.filter((element) => {
      console.log(element.head.value[key]);
      return element.head.value[key];
    })[0];

    return Ele ? Ele.head.value[key] : "Not Found";
  }

  contains(key) {
    return this.map.filter((element) => element.head.value[key])[0]
      ? true
      : false;
  }
}

function repeatedWord(str) {
  let strArray = str.replace(/\W/g, " ").toLowerCase().split(" ");
  let myhash = new HashTable(strArray.length + 1);

  for (const ele of strArray) {
    if (!myhash.contains(ele)) {
      myhash.add(ele, ele);
    } else {
      return ele;
    }
  }
}

console.log(
  repeatedWord(
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
  )
);
module.exports = repeatedWord;
