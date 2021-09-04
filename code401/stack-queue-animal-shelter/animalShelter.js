"use strict";
const Animal = require("./animal");

class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {
    if (!this.front) {
      this.front = animal;
      return;
    }

    let current = this.front;
    while (current.next) {
      current = current.next;
    }
    current.next = animal;

    return;
  }

  dequeue(pref) {
    if (!this.front) {
      return "empty AnimalShelter";
    }
    if (pref == "dog") {
      if (this.front.value == "dog") {
        let found = this.front.value;
        this.front = this.front.next;
        return found;
      } else {
        let prev = this.front;
        let current = this.front.next;

        while (current) {
          if (current.value == "dog") {
            let found = current.value;
            prev.next = current.next;
            return found;
          }
          prev = current;
          current = current.next;
        }
        return null;
      }
    } else if (pref == "cat") {
      if (this.front.value == "cat") {
        let found = this.front.value;
        this.front = this.front.next;
        return found;
      } else {
        let prev = this.front;
        let current = this.front.next;

        while (current) {
          if (current.value == "cat") {
            let found = current.value;
            prev.next = current.next;
            return found;
          }
          prev = current;
          current = current.next;
        }
        return null;
      }
    } else {
      return null;
    }
  }
}
module.exports = AnimalShelter;
