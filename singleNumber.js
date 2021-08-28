/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (!set.delete(nums[i])) {
            set.add(nums[i])
        }
    }

    return Array.from(set)[0]
};

console.log(singleNumber([1]))
