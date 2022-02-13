const assertEqual = require('./assertEqual');

// Stretch for later. Try to use for(const [key, val] of Object.entries(object))
const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for(const k of keys) {
    if (callback(object[k])) {
      return k;
    }
  }
};

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3), "Akaleri");