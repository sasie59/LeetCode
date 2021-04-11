/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary.sort(function(a,b) {
    return a - b;
  });
  console.log(salary);
  let max = salary[salary.length - 1];
  let min = salary[0];
  let count = 0
  for(let i = 0; i < salary.length;i++) {
    count+=salary[i]
  }
  return (count - (max + min )) / (salary.length - 2)
};

console.log(average([1000,2000,3000]));
console.log(average([4000,3000,1000,2000]));
console.log(average([6000,5000,4000,3000,2000,1000]));
console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]));