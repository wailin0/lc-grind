/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.splice(i , 0, 0)
            i++
        }
    }
    arr.splice(length,arr.length-length)
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
