/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const copy = [...heights].sort((a, b) => a-b)
    let num = 0

    for (let i = 0; i < heights.length; i++) {
        if (copy[i] !== heights[i]) {
            num++
        }
    }

    return num
};

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))

