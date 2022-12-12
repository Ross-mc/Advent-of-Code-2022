const { getLines } = require('../utils/getLines');

const splitAssignment = (assignment) => {
  //"2-4"
  const arr = assignment.split('-');
  return {
    start: +arr[0],
    end: +arr[1],
  };
};

const getAssignments = (line) => {
  //"2-4,6-8"
  const arr = line.split(',');
  return {
    firstAssignment: splitAssignment(arr[0]),
    secondAssignment: splitAssignment(arr[1]),
  };
};

const checkIfAssignmentCoveredCompletely = (assignment, otherAssignment) => {
  return assignment.start >= otherAssignment.start && assignment.end <= otherAssignment.end;
};

const checkIfAssignmentOverlapsAtAll = (assignment, otherAssignment) => {
  return assignment.start <= otherAssignment.start && assignment.end >= otherAssignment.start;
};

const checkAssignments = () => {
  let count = 0;
  let countTwo = 0;
  for (const line of getLines('04')) {
    const { firstAssignment, secondAssignment } = getAssignments(line);
    if (
      checkIfAssignmentCoveredCompletely(firstAssignment, secondAssignment) ||
      checkIfAssignmentCoveredCompletely(secondAssignment, firstAssignment)
    ) {
      count++;
    }
    if (
      checkIfAssignmentOverlapsAtAll(firstAssignment, secondAssignment) ||
      checkIfAssignmentOverlapsAtAll(secondAssignment, firstAssignment)
    ) {
      countTwo++;
    }
  }
  return {
    taskOne: count,
    taskTwo: countTwo,
  };
};

module.exports = {
  checkAssignments,
};
