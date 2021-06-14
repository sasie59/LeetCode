/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum = 0;
  let ans = nums[0];
  for(let i = 0; i < nums.length; i++) {
    if(sum > 0) {
      sum+=nums[i];
    }else {
      sum = nums[i];
    }
    ans = Math.max(ans, sum);
    // console.log(ans, sum);
  }
  return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));