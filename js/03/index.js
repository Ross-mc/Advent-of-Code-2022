const { getLines } = require('../utils/getLines');

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const getHalves = (arr) => {
  const halfIdx = arr.length / 2;
  return [arr.slice(0, halfIdx), arr.slice(halfIdx, arr.length)];
};

const findMatch = (arr1, arr2) => {
  for (const char of arr1) {
    if (arr2.includes(char)) {
      return char;
    }
  }
  return null;
};

const findMatchWith3 = (line1, line2, line3) => {
  for (const char of line1) {
    if (line2.includes(char) && line3.includes(char)) {
      return char;
    }
  }
  return null;
};

const findPriorities = () => {
  let sum = 0;
  const lines = getLines('03');
  for (const line of lines) {
    const [first, second] = getHalves(line);
    const matchedLetter = findMatch(first, second);
    sum += alphabet[matchedLetter];
  }
  let newSum = 0;
  for (let index = 0; index < lines.length; index += 3) {
    const line1 = lines[index];
    const line2 = lines[index + 1];
    const line3 = lines[index + 2];
    const matchedLetter = findMatchWith3(line1, line2, line3);
    newSum += alphabet[matchedLetter];
  }
  return {
    taskOne: sum,
    taskTwo: newSum,
  };
};

module.exports = {
  findPriorities,
};
