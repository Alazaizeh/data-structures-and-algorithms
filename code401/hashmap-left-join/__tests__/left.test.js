"use strict ";
const { leftJoin, HashTable } = require("../index");

describe("repeated word function", () => {
  let hh1 = new HashTable(10);
  let hh2 = new HashTable(10);

  hh1.add("ok", "gg");
  hh1.add("no", "dad");

  hh2.add("ok", "kak");
  hh2.add("mo", "kak");

  console.log(leftJoin(hh1, hh2));
  it("Successfully left join two hash maps", () => {
    expect(leftJoin(hh1, hh2)).toEqual([
      ["ok", "gg", "kak"],
      ["no", "dad", null],
    ]);
  });
  it("Successfully left join two hash maps", () => {
    expect(leftJoin(hh1, hh2)).toEqual([
      ["ok", "gg", "kak"],
      ["no", "dad", null],
    ]);
  });
  it("Successfully left join two hash maps", () => {
    expect(leftJoin(hh1, hh2)).toEqual([
      ["ok", "gg", "kak"],
      ["no", "dad", null],
    ]);
  });
});
