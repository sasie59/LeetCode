const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  var lenList = strs.map(function (str) {
    return str.length;
  });
  var minLen = Math.min(...lenList);
  for (var i = 0; i < minLen; i++) {
    var isSame = strs.slice(1).every(function (str) {
      return str[i] === strs[0][i];
    });
    if (!isSame) break;
  }
  return strs[0].slice(0, i);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
