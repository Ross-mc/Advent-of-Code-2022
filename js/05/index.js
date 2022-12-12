const { getLines } = require('../utils/getLines');

const originalStacks = {
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
    for (const [idx, stack] of Object.entries(originalStacks)) {
      const targetIdx = (idx - 1) * 4 + 1;
      if (line[targetIdx] !== ' ') {
        stack.push(line[targetIdx]);
      }
    }
  }
  return originalStacks;
};

const processInstruction = (instruction, stacks) => {
  //instruction move 1 from 2 to 1
  const [_, quantity, __, from, ___, to] = instruction.split(' ');
  const boxesToMove = stacks[from].splice(0, quantity);
  stacks[to].unshift(...boxesToMove.reverse());
};

const processNewInstruction = (instruction, stacks) => {
  //instruction move 1 from 2 to 1
  const [_, quantity, __, from, ___, to] = instruction.split(' ');
  const boxesToMove = stacks[from].splice(0, quantity);
  stacks[to].unshift(...boxesToMove);
};

const getTopOfStack = (stacks) => {
  let topOfStack = '';
  for (const stack of Object.values(stacks)) {
    if (stack[0]) {
      topOfStack += stack[0];
    }
  }
  return topOfStack;
};

const moveBoxes = () => {
  const lines = getLines('05');
  const stacks = JSON.parse(JSON.stringify(getStartConfig(lines.slice(0, 8))));
  const stacksForPartTwo = JSON.parse(JSON.stringify(getStartConfig(lines.slice(0, 8))));
  for (const line of lines.slice(10, lines.length)) {
    processInstruction(line, stacks);
    processNewInstruction(line, stacksForPartTwo);
  }

  return {
    taskOne: getTopOfStack(stacks),
    taskTwo: getTopOfStack(stacksForPartTwo),
  };
};

module.exports = {
  moveBoxes,
};
