/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {

    if (mat.length === 0) {
        return [0]
    }
    let row = 0
    let col = 0
    const m = mat.length
    const n = mat[0].length

    let result = []

    for (let i = 0; i < m * n; i++) {
        result.push(mat[row][col])

        if ((row + col) % 2 === 0) {
            if (row === 0) { // check if position is at the top
                col++    //if cant go up go right
            }
            // else if (col === n - 1) {
            //     row++
            // } else {
            //     row++
            //     col--
            // }
        } else {
            // if (row === n - 1) {
            //     col++
            // } else if (col === 0) {
            //     row++
            // } else {
            //     row--
            //     col++
            // }
        }
    }

    return result
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
