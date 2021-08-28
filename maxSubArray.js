var maxSubArray = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum=sum+nums[i]
    }
    return sum
};
console.log(maxSubArray([5,4,-1,7,8]))
