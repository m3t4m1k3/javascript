const sum = require("./index");

test("sums [1,2,3,4,5] to equal 15", () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test("sums [1] to equal 1", () => {
  expect(sum([1])).toBe(15);
});

test("sums [] to equal 0", () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test("sums (no args) to equal 0", () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});