var findMaxConsecutiveOnes = function (nums) {
    let total = 0
    let maxValue = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            total++
            maxValue = total > maxValue ? total : maxValue
        } else {
            total = 0
        }
    }
    return maxValue;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
