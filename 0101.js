/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let num = astr.split('').sort();
  for(let i = 0; i < num.length;) {
    if(num[i] !== num[i + 1]) i++;
    else return false;
  }
  return true;
};

console.log(isUnique("leetcode"));
console.log(isUnique("abc"));
console.log(isUnique("kzwunahkiz"));