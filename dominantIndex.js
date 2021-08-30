/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    const max = Math.max(...nums)
    const minIntMustBe = max / 2;
    const intFound = nums.find(n => n !== max && n > minIntMustBe);
    return intFound ? -1 : nums.indexOf(max);

    return -1
};

console.log(dominantIndex([1,2,3,4]))
