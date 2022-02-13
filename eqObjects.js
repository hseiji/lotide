const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If the length is equal we continue
  if (keys1.length !== keys2.length) {
    return false;
  }  
  // Loop through the keys
  for (const k of keys1) {

    // ARRAY --- If the value of this key is array we use eqArrays function
    if (Array.isArray(object1[k])) {
      if(!eqArrays(object1[k], object2[k])) {
        return false;
      }
    } 
    // OBJECT 
    else {
      // This means the item has a nested object
      if (Object.keys(object1[k]).length > 0 && Object.keys(object1[k]).length === Object.keys(object2[k]).length) {
        if(!eqObjects(object1[k], object2[k])) {
          return false
        };
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
  }

  return true;
};

module.exports = eqObjects;

// console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })); // => true
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(eqObjects({ a: { y: { h: 5, e: { f: 4, g: 3 } }, z: 1 }, b: 2 }, { a: { y: { h: 5, e: { f: 4, g: 3 } }, z: 1 }, b: 2 })); // => true

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(eqObjects(ab, abc), false); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // eqObjects(cd, dc); // => true
// // assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // eqObjects(cd, cd2); // => false
// // assertEqual(eqObjects(cd, cd2), false);
