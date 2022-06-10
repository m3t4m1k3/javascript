const sum = require('./index');

test('sums [1,2,3,4,5] to equal 15', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});