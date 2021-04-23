/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) return i;
  }
  return -1;
};

console.log(findMagicIndex([1, 1, 1]));
console.log(findMagicIndex([0, 2, 3, 4, 5]));
console.log(findMagicIndex([3,4,5,5,5,5]));
