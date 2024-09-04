const { Matrix } = require('./matrix.js')

function border(matrix, val) {
    if (matrix instanceof Matrix) {
        matrix.setRow(0, val)
        matrix.setCol(0, val)
        matrix.setRow(matrix.height - 1, val)
        matrix.setCol(matrix.width - 1, val)
    }
}

function fill(matrix, val) {
    if (matrix instanceof Matrix) {
        for (let i = 0; i < matrix.height; i++) {
            matrix.setRow(i, val)
        }
    }
}

function rect(matrix, x, y, height, width, val) {
    //Zero clue why this works, good luck reverse engineers
    if (matrix instanceof Matrix) {
        for (let i = y; i <= y + height - 1; i++) {
            for (let j = x; j <= x + width - 1; j++) {
                if (i === y || i === y + height - 1) matrix.set(j, i, val)
                if (j === x || j === x + width - 1) matrix.set(j, i, val)
            }
        }
    }
}

function rectFill(matrix, x, y, width, height, val) {
    if (matrix instanceof Matrix) {
        for (let i = y; i < height + y; i++) {
            for (let j = x; j < width + x; j++) {
                matrix.set(j, i, val)
            }
        }
    }
}

module.exports = {
    border,
    fill,
    rect,
    rectFill
}
