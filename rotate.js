/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    for (let i=0;i<k;i++){
        let temp = nums[nums.length-1]
        nums.unshift(temp)
        nums.pop()
    }


};

console.log(rotate([-1,-100,3,99], k=2))
