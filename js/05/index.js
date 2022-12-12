const { getLines } = require('../utils/getLines');

const stacks = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
};

const getStartConfig = (startingLines) => {
  //startLines : [C]         [S] [H]
  //etc
  //to target the letter for each stack it is (n - 1) * 4 + 1

  for (const line of startingLines) {
    for (const [idx, stack] of Object.entries(stacks)) {
      const targetIdx = (idx - 1) * 4 + 1;
      if (line[targetIdx] !== ' ') {
        stack.push(line[targetIdx]);
      }
    }
  }
};

const processInstruction = (instruction) => {
  //instruction move 1 from 2 to 1
  const [_, quantity, __, from, ___, to] = instruction.split(' ');
  const boxesToMove = stacks[from].splice(0, quantity);
  stacks[to].unshift(...boxesToMove.reverse());
};

const getTopOfStack = () => {
  const lines = getLines('05');
  getStartConfig(lines.slice(0, 8));
  for (const line of lines.slice(10, lines.length)) {
    processInstruction(line);
  }
  let topOfStack = '';
  for (const stack of Object.values(stacks)) {
    if (stack[0]) {
      topOfStack += stack[0];
    }
  }
  return {
    taskOne: topOfStack,
  };
};

module.exports = {
  getTopOfStack,
};
