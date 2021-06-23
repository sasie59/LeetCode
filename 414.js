/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort(function (a, b) {
    return b - a
  })
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  };
  console.log(nums);
  if (nums.length < 3) return nums[0];
  if (nums.length === 3) return nums[nums.length - 1];
  else return nums[2];
};

console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 2, 1]));
console.log(thirdMax([1, 1, 2]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 2, 3, 4, 2, 1]));