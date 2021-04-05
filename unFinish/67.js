/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if(a.length >= 10000 && a.length < 1 || b.length >= 10000 && b.length < 1) return false;
  let a_10 = parseInt(a,2);
  let b_10 = parseInt(b,2);
  return (a_10 + b_10).toString(2)
};

console.log(addBinary("11","1"));
console.log(addBinary("1010","1011"));
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
                      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
