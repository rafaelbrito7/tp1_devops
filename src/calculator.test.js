const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(Calculator.sum(1,2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(Calculator.subtraction(2,1)).toBe(1);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(Calculator.multiplication(1,2)).toBe(2);
});

test('split 2 / 2 to equal 1', () => {
  expect(Calculator.division(2,2)).toBe(1);
})
