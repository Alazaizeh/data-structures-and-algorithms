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

let myhash = new HashTable(50);
myhash.add("John", "Boss");
// myhash.add("Cathy", "The Real Boss");
// myhash.add("Zach", "Kid 1");
// myhash.add("Allie", "Kid 2");
// myhash.add("Rosie", "Dog");
// myhash.add("Cat", "TA");
// myhash.add("Justin", "Student");
// myhash.add("Jason", "Student");
// myhash.add("Ben", "Student");
// myhash.add("Timea", "Student");
// myhash.add("Jen", "Student");
// myhash.add("Khalil", "Student");
// myhash.add("Michael", "Student");
// myhash.add("Ovi", "Student");

console.log(myhash.get("John"));

// myhash.map.forEach((data, i) => {
//   console.log(i, data && data.values());
// });

module.exports = HashTable;
