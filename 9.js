const isPalindrome = (x) => {
  const str = x.toString();
  return str === str.split('').reverse().join('');
  // const newStr = str.split('').reverse().join('');
  // return str === newStr;
}
console.log(isPalindrome('12321'));
console.log(isPalindrome('-16513210'));
console.log(isPalindrome('1302031'));