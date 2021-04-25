/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = -Math.pow(2, 31);
  str = parseInt(s);
  str = str ? str : 0;
  if (str > MAX_VALUE) return MAX_VALUE;
  else if (str < MIN_VALUE) return MIN_VALUE;
  else return str;
};

console.log(myAtoi("42"));
console.log(myAtoi("103"));
console.log(myAtoi("2147483648"));
