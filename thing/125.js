/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const rules = / [a-z]/;
  const str = s.toLowerCase().split('');
  console.log(rules.match(str));
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));