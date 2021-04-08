/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  if(low % 2 === 1 && high % 2 === 1)  return ((high - low) / 2) + 1 ;
  else if(low % 2 === 0 && high % 2 === 0) return ((high - low) / 2) ;
  else if((low + high) % 2 === 1 && high - low > 1) return Math.abs(Math.ceil(~~(high - low) / 2 ));
  else if(high - low === 1 ) return 1;
};

console.log(countOdds(2,100));
console.log(countOdds(1,9));
console.log(countOdds(21,22));
console.log(countOdds(14,17));
console.log(countOdds(1,10));