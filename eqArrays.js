const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// TESTS --------------------------------------------------------------
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[1, [2, [4]]], 3], [[1, [2, [4]]], 3])); // => true


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
