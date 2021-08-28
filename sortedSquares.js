/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        nums[i]=nums[i]*nums[i]
    }


    return nums


};

console.log(sortedSquares([-4, -1, 0, 3, 10]))
