var lengthOfLastWord = function (s) {
    //remove all whitespaces from start and end first
    //split all word to array and get last word length
    const array = s.trim().split(/\s+/)
    return array[array.length - 1].length
}

console.log(lengthOfLastWord('luffy is still joyboy'))
