/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0
    let sum = nums.reduce((previousValue, currentValue) => currentValue+previousValue)


    for (let i = 0; i < nums.length; i++) {
        if (leftSum===(sum-leftSum-nums[i])){
            return i
        }
        leftSum+=nums[i]
    }

    return -1
};

console.log(pivotIndex([2,1,-1]))
