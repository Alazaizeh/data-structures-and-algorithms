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

function leftJoin(h1, h2) {
  let result = [];
  let key;
  let v1;
  let v2 = null;
  for (let index = 0; index < h1.map.length; index++) {
    if (h1.map[index]) {
      key = Object.keys(h1.map[index].head.value)[0];
      v1 = Object.values(h1.map[index].head.value)[0];
      if (h2.contains(key)) {
        v2 = Object.values(h2.map[index].head.value)[0];
      } else {
        v2 = null;
      }
      result.push([key, v1, v2]);
    }
  }
  return result;
}

let hh1 = new HashTable(10);
let hh2 = new HashTable(10);

hh1.add("ok", "gg");
hh1.add("no", "dad");

hh2.add("ok", "kak");
hh2.add("mo", "kak");

console.log(leftJoin(hh1, hh2));

module.exports = leftJoin;
