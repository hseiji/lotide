const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  } else {

    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  return true;
  }
};


const assertArraysEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
assertArraysEqual(map(words, word => (word + "ay")), ["grounday", "controlay", "toay", "majoray", "tomay"]);
assertArraysEqual(map(words, word => (word[0] + word)), ["gground", "ccontrol", "tto", "mmajor", "ttom"]);