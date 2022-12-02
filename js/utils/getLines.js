const { getInput } = require('./getInput');

const getLines = (day) => {
  const buf = getInput(day);
  const lines = buf.toString().split('\n');
  return lines;
};

module.exports = {
  getLines,
};
