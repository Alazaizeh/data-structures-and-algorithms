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

  it("should kthFromEnd return targeted value if k == length", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);

    expect(newList.kthFromEnd(1)).toEqual(100);
  });
  it("should kthFromEnd return error Where k is not a positive integer", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);

    expect(newList.kthFromEnd(-1)).toEqual("invalid K");
  });
  it("should kthFromEnd return targeted value", () => {
    let newList = new LinkedList();
    newList.append(100);
    newList.append(200);
    newList.append(300);
    expect(newList.kthFromEnd(1)).toEqual(200);
  });
  it("should kthFromEnd return targeted value Where the linked list is of a size 1", () => {
    let newList = new LinkedList();
    newList.append(100);
    expect(newList.kthFromEnd(0)).toEqual(100);
  });
});
