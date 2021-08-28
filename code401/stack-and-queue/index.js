"use strict";

const Node = require("./node");
const Stack = require("./stack");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
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

    return;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let nodeString = "";
    let current = this.head;
    while (current) {
      nodeString += `{${current.value}} -> `;
      current = current.next;

      if (current == null) {
        nodeString += `NULL`;
      }
    }
    return nodeString;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    let current = this.head.next;

    if (this.head.value == value) {
      node.next = this.head;
      this.head = node;
      return;
    } else {
      while (current) {
        if (current.value == value) {
          node.next = current;
          tail.next = node;
          return;
        }
        tail = current;
        current = current.next;
      }
    }
    return;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current) {
      if (current.value == value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }

    return;
  }

  kthFromEnd(k) {
    let len = 0;
    let current = this.head.next;

    while (current) {
      current = current.next;
      len++;
    }
    if (k <= len && k >= 0) {
      current = this.head;
      for (let i = 0; i < len - k; i++) {
        current = current.next;
      }
      return current.value;
    } else {
      return "invalid K";
    }
    return;
  }
}
function zipLists(ll1, ll2) {
  let zippedList = new LinkedList();
  let ll1Len = 0;
  let ll2Len = 0;
  let ll1Current = ll1.head;
  let ll2Current = ll2.head;

  while (ll1Current) {
    ll1Current = ll1Current.next;
    ll1Len++;
  }
  while (ll2Current) {
    ll2Current = ll2Current.next;
    ll2Len++;
  }

  ll1Current = ll1.head;
  ll2Current = ll2.head;
  let len = ll1Len > ll2Len ? ll1Len : ll2Len;
  while (len >= 0) {
    if (ll1Current) {
      zippedList.append(ll1Current.value);
      ll1Current = ll1Current.next;
    }
    if (ll2Current) {
      zippedList.append(ll2Current.value);
      ll2Current = ll2Current.next;
    }
    len--;
  }

  return zippedList;
}

// 1 2 3 2 1
function ppp(ll) {
  let current = ll.head;
  let arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(Math.ceil(arr.length / 2));
  // O (n)
  for (let i = 0, j = arr.length - 1; i < Math.ceil(arr.length / 2); i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }
  return true;
}

function xxx(x) {
  let current = x.head;
  let y = new LinkedList();
  while (current) {
    let temp = y.head;
    y.head = new Node(current.value);
    y.head.next = temp;
    current = current.next;
  }
  console.log(y.toString());
  return y;
}

// let myList = new LinkedList();

// myList.append("1");
// myList.append("2");
// myList.append("3");
// myList.append("4");

// console.log(myList.toString());

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.top.value);
console.log(newStack.top.next.value);
console.log(newStack.top.next.next.value);

module.exports = { LinkedList, zipLists };
