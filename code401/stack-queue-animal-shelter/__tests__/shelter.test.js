"use strict";

const Animal = require("../animal");
const AnimalShelter = require("../animalShelter");

describe("AnimalShelter", () => {
  it("Can successfully enqueue onto a AnimalShelter", () => {
    let newAnimalShelter = new AnimalShelter();
    let animal = new Animal("dog");
    newAnimalShelter.enqueue(animal);

    expect(newAnimalShelter.front.value).toEqual("dog");
  });
  it("Can successfully enqueue multiple values onto a AnimalShelter  ", () => {
    let newAnimalShelter = new AnimalShelter();
    let animal1 = new Animal("dog");
    let animal2 = new Animal("cat");

    newAnimalShelter.enqueue(animal1);
    newAnimalShelter.enqueue(animal2);

    expect(newAnimalShelter.front.value).toEqual("dog");
    expect(newAnimalShelter.front.next.value).toEqual("cat");
  });
  it("Can successfully dequeue off the AnimalShelter", () => {
    let newAnimalShelter = new AnimalShelter();
    let animal1 = new Animal("dog");
    let animal2 = new Animal("cat");

    newAnimalShelter.enqueue(animal1);
    newAnimalShelter.enqueue(animal2);

    expect(newAnimalShelter.dequeue("dog")).toEqual("dog");
  });
  it("Can successfully dequeue cat or dog from AnimalShelter", () => {
    let newAnimalShelter = new AnimalShelter();
    let animal1 = new Animal("dog");
    let animal2 = new Animal("cat");

    newAnimalShelter.enqueue(animal1);
    newAnimalShelter.enqueue(animal2);

    expect(newAnimalShelter.dequeue("cat")).toEqual("cat");
  });

  it("Can return null if called dequeue without pref cat or dog", () => {
    let newAnimalShelter = new AnimalShelter();
    let animal1 = new Animal("dog");
    let animal2 = new Animal("cat");

    newAnimalShelter.enqueue(animal1);
    newAnimalShelter.enqueue(animal2);

    expect(newAnimalShelter.dequeue()).toBeNull();
  });
});
