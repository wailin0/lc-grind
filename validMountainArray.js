/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] < arr[i + 1]) {
            i++
        }
        else if (arr[j] < arr[j - 1]) {
            j--
        } else {
            break;
        }
    }
    return i !== 0 && j !== arr.length - 1 && i === j;
}

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

