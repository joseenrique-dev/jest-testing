const randomString = require('../index');

test('Test index random', () => {
  expect(typeof randomString()).toBe('string');
});
