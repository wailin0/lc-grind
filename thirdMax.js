/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {


    let set = new Set();

    nums.forEach(item => set.add(item))

    const firstMax = Math.max(...set)
    if (set.size<3){
        return firstMax
    }
    set.delete(firstMax)

    const secondMax = Math.max(...set)
    set.delete(secondMax)

    return Math.max(...set)
};

console.log(thirdMax([1,3,2]))
