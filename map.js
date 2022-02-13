const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
// assertArraysEqual(map(words, word => (word + "ay")), ["grounday", "controlay", "toay", "majoray", "tomay"]);
// assertArraysEqual(map(words, word => (word[0] + word)), ["gground", "ccontrol", "tto", "mmajor", "ttom"]);