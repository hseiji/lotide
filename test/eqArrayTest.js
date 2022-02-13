const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TESTS --------------------------------------------------------------
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[1, [2, [4]]], 3], [[1, [2, [4]]], 3])); // => true


// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
