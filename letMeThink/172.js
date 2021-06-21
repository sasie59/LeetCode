/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = ~~(n / 5) + ~~(n / 25)
  return count;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(25));
console.log(trailingZeroes(51));
console.log(trailingZeroes(200));