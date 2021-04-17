/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort(function(a,b){
    return a -  b;
  });
  let miss ='';
  if(nums.length === 1) return miss = nums[0] === 0 ? 1 : 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === i) i++;
    else return i;
  }
  return nums[nums.length - 1] + 1;
};

console.log(missingNumber([0,1]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
