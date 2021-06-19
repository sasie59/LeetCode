/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let income = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > income) income = prices[i] - min
  }
  return income;
};

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 5, 3, 4, 6, 1, 20]));
