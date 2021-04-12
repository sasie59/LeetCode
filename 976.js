/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] + nums[i + 2] > nums[0]) return nums[0] + nums[1] + nums[2];
    else if (nums.length <= 3 && nums[i + 1] + nums[i + 2] <= nums[0]) return 0;
    else if (nums.length > 3 && nums[i + 1] + nums[i + 2] <= nums[0]) nums = nums.slice(1),i--;
  }
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1]));
console.log(largestPerimeter([3, 2, 3, 4]));
console.log(largestPerimeter([3, 6, 2, 3]));
console.log(largestPerimeter([5,3,5,3,2]));
console.log(largestPerimeter([1, 2, 2, 4, 18, 8]));
