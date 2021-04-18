/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n === 0 || n < 0) return false;
  let num = n.toString(2);
  num = num.split('').sort();
  return num[num.length - 2] === '1' ? false : true;
};

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));