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

// console.log(flatten([1, 2, 3]));
// console.log(flatten([1, 2, [3, 4]]));
// console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
