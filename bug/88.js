/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums = nums1.concat(nums2).sort();
  for(let i = 0; i < nums.length; i++) {
    if(nums[0] === 0) nums.shift();
    else if( nums[i] > 0 ) break;
  }
  return nums;
};

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));