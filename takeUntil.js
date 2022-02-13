const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const result = [];
  // array.forEach(element => {
  //   if(callback(element)) {
  //     return result;
  //   } else {
  //     result.push(element)
  //   }
  // });       ---- Be aware forEach does not stop! ----
  for (const elem of array) {
    if (callback(elem)) {
      return result;
    } else {
      result.push(elem);
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
