const isPalindrome = (x) => {
  const str = x.toString();
  return str === str.split('').reverse().join('');
  // const newStr = str.split('').reverse().join('');
  // return str === newStr;
}
console.log(isPalindrome('12321'));
console.log(isPalindrome('-16513210'));
console.log(isPalindrome('1302031'));

// const add = arr => arr.map(item => item + 3);
// const filter = arr => arr.filter(item => item.isDone);
// console.log(add([1,2,3])); 
// console.log(filter([
//   {id: 1, isDone: false},
//   {id: 2, isDone: true},
//   {id: 3, isDone: true},
// ])); 