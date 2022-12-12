const { findElfWithMostCalories } = require('./js/01');
const { calculateRPSscore } = require('./js/02');
const { findPriorities } = require('./js/03');

const main = () => {
  const day1 = findElfWithMostCalories();
  console.log({ day1 });
  const day2 = calculateRPSscore();
  console.log({ day2 });
  const day3 = findPriorities();
  console.log(day3);
};

main();
