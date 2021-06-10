/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (!/[a-z]|[0-9]/.test(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  if (arr.length === 1) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - (1 + i)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
