const randomString = require('../index');

describe('Testing ramdong functionalities', () => {
  test('Test index random', () => {
    expect(typeof randomString()).toBe('string');
  });

  test('Check city', () => {
    expect(randomString()).not.toMatch(/Lima/);
  });
});
