const { TestWatcher } = require('@jest/core');

const str = 'My first test';

const fruits = ['apple', 'melon', 'banana'];

test('my first test', () => {
  expect(str).toMatch(/first/);
});

test('We ave a banana?', () => {
  expect(fruits).toContain('apple');
});

test('Height number', () => {
  expect(10).toBeGreaterThan(9);
});

test('test boolan var', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callBack) => {
  callBack(str.split('').reverse().join(''));
};

test('test callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  });
});
