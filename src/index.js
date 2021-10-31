const cities = [
  'Ciudad de Mexico',
  'Bogotá',
  'Lima',
  'Buenos Aires',
  'Guadalajara',
];

/**
 * Cities testing
 */
const ranomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

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

module.exports = ranomString;
