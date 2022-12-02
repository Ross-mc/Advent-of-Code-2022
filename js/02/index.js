const { getLines } = require('../utils/getLines');

//A,X = rock (1), B,Y = paper (2), C,Z=scissors (3)

const resultScoreMap = {
  win: 6,
  draw: 3,
  lose: 0,
};

const rpsMap = {
  X: {
    A: 'draw',
    B: 'lose',
    C: 'win',
    score: 1,
  },
  Y: {
    A: 'win',
    B: 'draw',
    C: 'lose',
    score: 2,
  },
  Z: {
    A: 'lose',
    B: 'win',
    C: 'draw',
    score: 3,
  },
};

//x means lose, y means draw, z means lose
const winLoseMap = {
  X: {
    A: 3,
    B: 1,
    C: 2,
    score: 0,
  },
  Y: {
    A: 1,
    B: 2,
    C: 3,
    score: 3,
  },
  Z: {
    A: 2,
    B: 3,
    C: 1,
    score: 6,
  },
};

const calculateRPSscore = () => {
  const lines = getLines('02');
  let currScorePartOne = 0;
  let currScorePartTwo = 0;
  for (const line of lines) {
    const [elfPlay, myPlay] = line.split(' ');
    const result = rpsMap[myPlay][elfPlay];
    currScorePartOne += resultScoreMap[result] + rpsMap[myPlay].score;
    currScorePartTwo += winLoseMap[myPlay][elfPlay] + winLoseMap[myPlay].score;
  }
  return { partOne: currScorePartOne, partTwo: currScorePartTwo };
};

module.exports = {
  calculateRPSscore,
};
