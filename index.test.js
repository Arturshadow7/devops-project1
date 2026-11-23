const test = require('node:test');
const assert = require('node:assert');
const { add, isEven } = require('./index');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('isEven detects even numbers', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(7), false);
});
