var lengthOfLastWord = function(s) { 
  const str = s.toString();
  if(str.length === 0) return 0
  else if(str.trim().split('').length === 1) return str[0].length
  const arr = str.trim().split(' ')
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("b a "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" "));