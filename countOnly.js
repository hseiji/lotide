const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // let finalObj = {};
  
  // // First we iterate through the keys of the object names
  // for (const key in itemsToCount) {
  //   let count = 0;
  //   // For each name we verify if the value is true and within the array of names
  //   if (allItems.includes(key) && itemsToCount[key]) {
  //     // Now we count how many times the name appears
  //     for (const name of allItems) {
  //       if (name === key) {
  //         count ++;
  //       }
  //     }
  //     // After is done we assign the key to its value
  //     finalObj[key] = count;
  //   }
  // }
  // return finalObj;
  const result = {};
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);