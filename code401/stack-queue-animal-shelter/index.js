"use strict";

const animal = require("./animal");
const AnimalShelter = require("./animalShelter");

let newAnimalShelter = new AnimalShelter();
newAnimalShelter.enqueue(new animal("dog"));
// newAnimalShelter.enqueue(new animal("dog"));
newAnimalShelter.enqueue(new animal("cat"));
// newAnimalShelter.enqueue(new animal("dog"));

console.log(newAnimalShelter.front.value);
// newAnimalShelter.dequeue()
console.log(newAnimalShelter.dequeue("cat"));
console.log("-----------------------");
// console.log(newAnimalShelter.front.value);
// console.log(newAnimalShelter.front.next.value);
// console.log(newAnimalShelter.front.next.next.value);
