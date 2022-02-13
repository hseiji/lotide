const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;

// console.log(flatten([1, 2, 3]));
// console.log(flatten([1, 2, [3, 4]]));
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
