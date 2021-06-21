/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let quotient = ~~(n / 7);
  // 商數
  let remainder = n % 7;
  // 餘數 
  const sum = (1 + remainder) * remainder / 2
  const seven = (quotient - 1) * 7;
  console.log(quotient, remainder,sum);
  if(quotient === 0) return  sum;
  else if(quotient >= 1 ) return ((1 + 7) * 7 / 2) * quotient + sum + remainder * quotient + seven;
};

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20)); 
console.log(totalMoney(26)); 
// console.log(totalMoney(100)); 