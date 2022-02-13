const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const without = (source, itemsToRemove) => {
  let result = [];
  for (const i of source) {
    if (!itemsToRemove.includes(i)) {
      result.push(i);
    }
  }
  return result;
};

module.exports = without;

// const words = ["hello", "world", "lighthouse", "labs"];
// console.log(without(words, ["lighthouse", "world"]));