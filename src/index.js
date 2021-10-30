const cities = [
  'Ciudad de Mexico',
  'Bogotá',
  'Lima',
  'Buenos Aires',
  'Guadalajara',
];

const ranomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

module.exports = ranomString;
