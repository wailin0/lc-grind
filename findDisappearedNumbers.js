/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    const set = new Set([...nums])
    const arr = []

    for (let i=0; i < nums.length; i++) {
        if (!set.has(i+1)) {
            arr.push(i+1)
        }
    }

    return arr
};


console.log(findDisappearedNumbers([1,1]))
