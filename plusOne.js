var plusOne = function (digits) {
    //loop from end
    //if value is 9 replaced with 0 and if all values are 9 add 1 at start
    //if value isnt 9 add 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++
            return digits
        }
    }
    digits.unshift(1)
    return digits
};
console.log(plusOne([9,9,9]))
