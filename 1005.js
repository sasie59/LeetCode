/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  return words.indexOf(s);
};

console.log(findString(["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], "ball"));
console.log(findString(["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], "ta"));