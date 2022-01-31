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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

// console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
