"use strict";

const Animal = require("../animal");

describe("Animal", () => {
  it("should create new Animal using constructor(value)", () => {
    let newAnimal = new Animal(100);
    expect(newAnimal.value).toEqual(100);
    expect(newAnimal.next).toBeNull();
  });
});
