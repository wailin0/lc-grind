/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {


    let arr1 = nums1.length >= nums2.length ? nums1 : nums2;
    let arr2 = nums1.length >= nums2.length ? nums2 : nums1;

    let arr = []

    for (let i = 0, j = 0; i < arr1.length; i++, j++) {
        console.log(arr1[i]+"-"+arr2[j])
        if (arr1[i] === arr2[j]) {
            arr.push(arr1[i])
        } else {
            j--
        }
    }

    console.log(arr1)
    console.log(arr2)

    return arr
};

console.log(intersect([2, 1],[1, 2]))
