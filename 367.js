/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) return true;
  }
  return false;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(25));