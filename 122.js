/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let income = 0
  for(let i = 0; i < prices.length - 1; i++) {
    if(prices[i + 1] - prices[i] > 0) income += prices[i + 1] - prices[i];
  }
  return income;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));