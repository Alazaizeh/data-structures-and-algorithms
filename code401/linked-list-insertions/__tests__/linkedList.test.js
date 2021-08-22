"use strict";

const LinkedList = require("../index");

describe("LinkedList", () => {
  it("should create new LinkedList ", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it("should append node to empty LinkedList ", () => {
    let newList = new LinkedList();
    newList.append(100);
    expect(newList.head.value).toEqual(100);
  });

  it("should append node to non-empty LinkedList ", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    expect(newList.head.next.value).toEqual(200);
  });

  it("should return true if the LinkedList includes a value", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    expect(newList.includes(100)).toEqual(true);
  });
  it("should return false if the LinkedList dosn't includes a value", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    expect(newList.includes(300)).toEqual(false);
  });

  it("should return all nodes and next pointers", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    expect(newList.toString()).toEqual("{100} -> {200} -> NULL");
  });

  it("should insertBefore insertet value before targeted value", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    newList.insertBefore(200, 150);
    expect(newList.head.next.value).toEqual(150);
  });

  it("should insertAfter insertet value before targeted value", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    newList.insertAfter(100, 150);
    expect(newList.head.next.value).toEqual(150);
  });
});
