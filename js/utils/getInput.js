const fs = require('fs');
const path = require('path');

const getInput = (day) => {
  return fs.readFileSync(path.join(__dirname, `../../inputs/${day}/input.txt`));
};

module.exports = {
  getInput,
};
