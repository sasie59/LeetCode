/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  if(dividend * divisor < 0) divisor*= -1;
  let count = 1;
  let result = dividend - divisor
  for(let i = 1; i < dividend; i++) {
    if(result > divisor) {
      count+=1;
      result-=divisor;
    }
  }
  return (dividend * divisor < 0) ? count * -1: count ;
};

console.log(divide(10, 3));
console.log(divide(7, -3));