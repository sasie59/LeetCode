/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastOne = digits.pop() + 1;
  digits.push(lastOne);
  return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([1,2,9]));
console.log(plusOne([9]));
