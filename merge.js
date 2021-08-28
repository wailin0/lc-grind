/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let length = m + n - 1
    nums1.splice(m, m)

    for (let i = 0; i <length; i++) {
        nums1.push(nums2[i])
    }
    console.log(nums1)
};


merge(
    [1, 2, 6],
    2,
    [1],
    1
)
