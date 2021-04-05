/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  for(let i = 0; i <= nums.length - 1 ;i++ ) {
    if (target < nums[0]) return 0;
    else if(target > nums[i] && target < nums[i + 1]) return i + 1;
    else if(target > nums[nums.length - 1]) return nums.length;
    else if(nums[i] === target) return i;
  }
} 

console.log(searchInsert([1,3,5,6,8],9));