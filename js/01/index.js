const { getInput } = require('../utils/getInput');

const getLines = () => {
  const buf = getInput('01');
  const lines = buf.toString().split('\n');
  return lines;
};

const findElfWithMostCalories = () => {
  const lines = getLines();
  const topThree = [0, 0, 0];
  let currElfCalories = 0;
  for (const line of lines) {
    if (line === '') {
      if (currElfCalories > topThree[0]) {
        topThree[0] = currElfCalories;
      }
      currElfCalories = 0;
      topThree.sort((a, b) => a - b);
    } else {
      currElfCalories += Number(line);
    }
  }
  const totalOfTopThree = topThree.reduce((acc, num) => acc + num, 0);
  return { mostCalories: topThree[2], totalOfTopThree };
};

module.exports = {
  findElfWithMostCalories,
};
