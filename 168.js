/**
 * @param {number} columnNumber
 * @return {string}
 */
// let arr = Array.from(Array(26).keys());
let arr = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var convertToTitle = function (columnNumber) {
  if (columnNumber <= 26) return arr[columnNumber];
  let Quotient = ~~(columnNumber / 26);
  // if (Quotient > 26)?
  let remainder = columnNumber % 26;
  return arr[Quotient] + arr[remainder];
};



console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(2147483647));