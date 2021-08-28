/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (let i=0;i<s.length;i++){
        for (let j=1;j<s.length;j++){
            console.log(s[i][j])
        }
    }
};

console.log(longestPalindrome('babad'))
