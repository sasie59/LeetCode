/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if(n <= 0) return false;
  if(n === 1) return true;
  let num = n.toString(2);
  for(let i = 1; i < num.length;) {
    if(num[i]=== '0' && num.length % 2 === 1) i++;
    else return false
  }
  return true;
};

console.log(isPowerOfFour(0));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(64));
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(32));