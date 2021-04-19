/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort();
  // console.log(nums);
  let midIndex = ~~(nums.length / 2);
  // console.log(midIndex);
  return nums[midIndex];
};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));