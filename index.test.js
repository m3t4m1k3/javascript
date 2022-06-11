const sum = require("./index");

test("sum([1,2,3,4,5]) to return 15", () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test("sum([1]) to return 1", () => {
  expect(sum([1])).toBe(1);
});

test("sum([0]) to return 0", () => {
  expect(sum([1])).toBe(1);
});

test("sums([]) to return 0", () => {
  expect(sum([])).toBe(0);
});

test("sum() to return 0", () => {
  expect(sum()).toBe(0);
});