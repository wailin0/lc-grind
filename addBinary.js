var addBinary = function(a, b) {
    //change all value to binary literal and add with bigint
    const binA = '0b'+a
    const binB = '0b'+b
    const sum = BigInt(binA)+BigInt(binB)

    return sum.toString(2)

};

console.log(addBinary('11','1'))
