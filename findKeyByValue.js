const assertEqual = require('./assertEqual');
const findKey = require('./findKey');

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

const findKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);
  for (const k of keys) {
    if (obj[k] === value) {
      return k;
    }
  }
};

module.exports = findKeyByValue;

// findKeyByValue(bestTVShowsByGenre, "The Expanse");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);