const { Matrix } = require('./matrix.js')

function border(matrix, val) {
    if (matrix instanceof Matrix) {
        matrix.setRow(0, val)
        matrix.setCol(0, val)
        matrix.setRow(matrix.height - 1, val)
        matrix.setCol(matrix.width - 1, val)
    }
}

module.exports = {
    border
}