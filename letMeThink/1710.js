/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = {};
  nums.forEach(item => {
    result[item] = result[item] ? result[item] + 1 : 1;
  })
  console.log(result);
};

console.log(majorityElement([1,2,5,9,5,9,5,5,5]));
console.log(majorityElement([2,2,1,1,1,2,2]));