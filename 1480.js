/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  nums.forEach((item,index = 1) =>
      nums[index + 1]= item + nums[index + 1]
    )
    return nums.splice(0,nums.length - 1);
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));