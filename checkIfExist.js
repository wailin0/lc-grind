/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * 2 === arr[i + 1]) {

            return true
        }
        return false
    }
};

console.log(checkIfExist([10, 2, 5, 3]))
