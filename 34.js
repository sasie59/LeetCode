/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
   return [nums.indexOf(target), nums.lastIndexOf(target)];
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 7));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 0));