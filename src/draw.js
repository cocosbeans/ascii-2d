const { Matrix } = require('./matrix.js')

class Draw extends Matrix {
    border(val) {
        this.setRow(0, val)
        this.setCol(0, val)
        this.setRow(this.height - 1, val)
        this.setCol(this.width - 1, val)
    }

    fill(val) {
        for (let i = 0; i < this.height; i++) {
            this.setRow(i, val)
        }
    }

    rect(x, y, height, width, val) {
        //Zero clue why this works, good luck reverse engineers
        for (let i = y; i <= y + height - 1; i++) {
            for (let j = x; j <= x + width - 1; j++) {
                if (i === y || i === y + height - 1) this.set(j, i, val)
                if (j === x || j === x + width - 1) this.set(j, i, val)
            }
        }
    }

    rectFill(x, y, height, width, val) {
        for (let i = y; i < height + y; i++) {
            for (let j = x; j < width + x; j++) {
                this.set(j, i, val)
            }
        }
    }

    render(charset = null) {
        var mf = this.matrix.flat()
        var _ = ''
        for (let i = 0; i < mf.length; i++) {
            _ +=
                charset
                ? charset[parseInt(mf[i])]
                : mf[i]
            if ((i + 1) % this.width === 0 && i !== mf.length) _ += '\n'
        }

        return _
    }

    rep(char, charset) {
        return charset.indexOf(char)
    }
}

module.exports = { Draw }