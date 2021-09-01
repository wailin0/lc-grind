/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


var reverseString = function (s) {

    for (let i = 0, j = s.length - 1; i < s.length/2; i++, j--) {
        const last = s[j]
        const first = s[i]
        s[i] = last
        s[j] = first
    }

    return s

};

console.log(reverseString(["h", "e", "l", "l", "o"]))
