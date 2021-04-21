/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if(n === 1) return 1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n - i > 0) {
      count++,
      n = n - i;
    }
  }
  return (n - count === 1) ? count + 1 : count; 
};

console.log(arrangeCoins(1));
console.log(arrangeCoins(3));
console.log(arrangeCoins(10));
console.log(arrangeCoins(55));
