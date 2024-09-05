class Matrix {
    constructor(
        width = 0,
        height = 0
    ) {
        this.width = width
        this.height = height
        this.matrix = []
        this.pointer = [0, 0] //[row, col]

        if (this.width >= 1 && this.height >= 1) {
            for (let i = 0; i < this.height; i++) {
                var _ = []
                for (let j = 0; j < this.width; j++) {
                    _.push(0)
                }
                this.matrix.push(_)
            }
        }
    }

    getCell(row, col) {
        return this.matrix[row][col]
    }

    getFromPtr() {
        return this.matrix[this.pointer[0]][this.pointer[1]]
    }

    isMatrix(matrix) {
        //matrix is parent array
        if (!Array.isArray(matrix)) return false

        //all items are arrays
        for (let i of matrix) {
            if (!Array.isArray(i)) return false
        }

        //all items are the same size
        var defLen = matrix[0].length
        for (let i of matrix) {
            if (i.length !== defLen) return false
        }

        return true
    }

    movePtr(dir) {
        switch (dir) {
            case 'u':
                if (this.pointer[1] >= 1) this.pointer[1]--
            case 'd':
                if (this.pointer[1] < this.height - 1) this.pointer[1]++
            case 'l':
                if (this.pointer[0] >= 1) this.pointer[0]--
            case 'r':
                if (this.pointer[0] < this.width - 1) this.pointer[0]++
        }
    }

    point(row, col) {
        this.pointer = [row, col]
    }

    set(row, col, val) {
        this.matrix[row][col] = val
    }

    setCol(col, val) {
            for (let i = 0; i < this.height; i++) {
                this.matrix[i][col] =
                    Array.isArray(val) &&
                    val.length === this.height
                        ? val[i]
                        : val
            }
    }
    
    setPtr(val) {
        this.matrix[this.pointer[0]][this.pointer[1]] = val
    }

    setRow(row, val) {
        if (Array.isArray(val) && val.length === this.width) this.matrix[row] = val
        else {
            var _ = []
            for (let i = 0; i < this.width; i++) _.push(val)
            this.matrix[row] = _
        }
    }
}



module.exports = { Matrix }