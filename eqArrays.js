const assertEqual = require('./assertEqual');

const eqArrays = (actual, expected) => {
  if(actual.length !== expected.length) {
    return false;
  } else {
    
    for (let i = 0; i < actual.length; i++) {
      // Use of recursion: base case when is not an array anymore
      if (Array.isArray(actual[i])) {
        if (!eqArrays(actual[i], expected[i])) {
          return false;
        };
      } 
      // Now we just compare the elements of the array
      else {
        if (actual[i] !== expected[i]) {
          return false;
        }
      }
    }
  return true;
  }
};

module.exports = eqArrays;

