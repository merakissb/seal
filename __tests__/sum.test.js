// __tests__/sum.test.js
function sum(a, b) {
  return a + b;
}

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});

//bad test for worklfow testing
test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(3);
});