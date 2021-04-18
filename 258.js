/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return (num - 1) % 9 + 1;
};

console.log(addDigits(38));
console.log(addDigits(158));
console.log(addDigits(99));