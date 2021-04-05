/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;
  let arr = s.split("");
  if (arr.length % 2 === 1) return false;
  let res = [];
  let obj = {
    "(": -1,
    "[": -2,
    "{": -3,
    ")": 1,
    "]": 2,
    "}": 3,
  };
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] < 0) {
      res.push(obj[arr[i]]);
    } else {
      let p = res.pop();
      let k = obj[arr[i]];
      if (p + k !== 0) return false;
    }
  }
  return res.length === 0;
};

console.log(isValid("()[]{}"));
