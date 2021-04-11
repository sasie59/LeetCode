/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = [];
  let long = [];
  let short = [];
  if(nums1.length < nums2.length) {
    long = nums2;
    short = nums1;
  } else {
    long = nums1;
    short = nums2;
  }
  for(let i = 0; i < short.length; i++) {
    for(let j = 0; j < long.length; j++) {
      if(short[i] === long[j]) result.push(short[i]);
    }
  }
  let repeat = result.filter((item, index,arr) =>
      arr.indexOf(item) === index
  );
  return repeat;
};


console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([4,9,5],[9,4,9,8,4]));