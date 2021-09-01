/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let string = ''
    strs.sort()
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0].charAt(i) === strs[strs.length - 1].charAt(i)) {
            string = string + strs[0].charAt(i)
        } else {
            break
        }
    }
    return string
};
