const eqArrays = (actual, expected) => {
  if(actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if(actual[i] !== expected[i]) {
        return false;
      }
    }
  return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If the length is equal we continue
  if (keys1.length === keys2.length) {
    // Loop through the keys
    for (const k of keys1) {
      // If the value of this key is array we use eqArrays function
      if (Array.isArray(object1[k])) {
        if(!eqArrays(object1[k], object2[k])) {
          return false;
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }

};

const assertObjectsEqual = function(actual, expected) {
  // util library's inspect function
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);