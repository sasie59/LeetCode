/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const n = stones.split("").filter((item) => jewels.includes(item));
  return n.length;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
