const countLetters = (string) => {
  let aux = string.split('');
  let result = {};
  for (const char of aux) {
    let count = 0;

    // Check if the character is counted already
    if (!Object.keys(result).includes(char)) {
      // Counts how many times it appears
      for (let i = 0; i < aux.length; i++) {
        if (aux[i] === char) {
          count ++;
        }
      }
      result[char] = count;
    }
  }
  return result;
};

module.exports = countLetters;

// console.log(countLetters("canada"));
// assertEqual(countLetters("canada"), { c: 1, a: 3, n: 1, d: 1 });