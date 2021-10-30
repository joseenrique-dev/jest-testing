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

/**
 * Testing promises
 */
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('test Promise', () => {
  return reverseString2('Hello').then((string) => {
    expect(string).toBe('olleH');
  });
});

test('test Asyn/Await', async () => {
  const str = await reverseString2('Hello');
  expect(str).toBe('olleH');
});

afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all test.'));
beforeEach(() => console.log('Before Each test'));
beforeAll(() => console.log('Before All test'));
