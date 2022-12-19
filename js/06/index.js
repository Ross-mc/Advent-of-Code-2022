const { getLines } = require('../utils/getLines');

const produceAndCheckSet = (length, line, startIdx) => {
  const s = new Set();
  for (let i = 0; i < length; i++) {
    s.add(line[startIdx - i]);
  }
  return [...s].length === length;
};

const getIndexOfPacket = (line) => {
  for (let i = 3; i < line.length; i++) {
    if (produceAndCheckSet(4, line, i)) {
      return i + 1;
    }
  }
};

const getIndexOfMessage = (line) => {
  for (let i = 3; i < line.length; i++) {
    if (produceAndCheckSet(14, line, i)) {
      return i + 1;
    }
  }
};

const getMarkers = () => {
  const line = getLines('06');
  return {
    taskOne: getIndexOfPacket(line[0]),
    taskTwo: getIndexOfMessage(line[0]),
  };
};

module.exports = {
  getMarkers,
};
