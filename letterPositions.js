const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let arr = [];
  str = sentence.split('');

  for (const char of str) {

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {      
        if (str[i] === char) {
          arr.push(i);
        }
      }
    }
    if (char !== " ") {
      results[char] = arr;
    }
    arr = [];
  }  
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);
