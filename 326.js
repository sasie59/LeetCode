/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if(n === 0 || n < 0) return false;
  if(n === 1) return true;
  let num = n.toString(3);
  // console.log(num);
  num = num.split('').sort();
  // console.log(num);
  return num[num.length - 1] === '1' &&  num[num.length - 2] === '0';
};

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(19684));