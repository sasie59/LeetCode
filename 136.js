/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      break;
    }
  }
  return nums[i];
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
