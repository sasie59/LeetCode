/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // if(nums[0] === 2 && nums[1] === 2) return [2, 1];
  let result = [];
  for (let i = 0; i < nums.length - 1;) {
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i]);
      result.push(result[0] + 1);
      break;
    }else i++
  }
  return result;
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([3,2,2]));
