/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set([...nums])
    for (let i=0;i<=nums.length;i++){
        if (!set.has(nums[i+1])){
            return i+1
        }
    }
};

console.log(firstMissingPositive([1,2,0]))
