const romanToInt = (s) => {
  var count = 0;
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (var i = 0; i < s.length; i++) {
    if (obj[s[i]] === obj[s[i + 1]] || obj[s[i]] > obj[s[i + 1]]) {
      count = count + obj[s[i]];
    } else if (i === s.length - 1) {
      count = count + obj[s[i]];
    } else {
      count = count - obj[s[i]];
    }
  }
  return count;
};
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MXCV"));
console.log(romanToInt("XCV"));
