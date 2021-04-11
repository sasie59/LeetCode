/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else odd.push(nums[i]);
  }
  console.log(odd,even);
  let result = [];
  for (let i = 0; i < Math.max(even.length, odd.length);i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }
  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
