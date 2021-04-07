/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastOne = (digits.pop() + 1);
  if(lastOne < 9) digits.push(lastOne);
  else if (digits[digits.length - 1] === 9) {
    digits.pop();
    return digits.concat(1,0,1,0);
  } else return digits.concat(1,0);
  return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([1,2,9]));
console.log(plusOne([9,9,9]));
