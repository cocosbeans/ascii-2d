class Screen {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.matrix = new Array()
        this.rendered = ''
        this.render_updated = false
        this.charset = []
    }

    build(width = null, height = null, update = false) {
        this.matrix = new Array()
        this.render_updated = false
        if (update) {
            this.width = width
            this.height = height
        }

        var w = width ? width : this.width
        var h = height ? height : this.height

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) this.matrix.push(0)
        }
    }

    get_cell(row, col) {
        var r = row - 1
        var c = col - 1

        return this.matrix[c * this.height + r]
    }

    get_cell_index(row, col) {
        return (col - 1) * this.height + row - 1
    }

    get_column(col) {
        var c = col - 1
        var _ = new Array()

        for (let i = 0; i < this.height; i++) {
            _.push(this.matrix[i * this.height + c])
        }

        return _
    }

    get_row(row) {
        var r = row - 1
        var _ = new Array()

        for (let i = r * this.height; i < r * this.height + this.width; i++) {
            _.push(this.matrix[i])
        }

        return _
    }

    grab_charset(charset) {
        this.charset = charset
    }

    render(charset = null) {
        if (this.charset.length > 0) charset = this.charset

        this.render_updated = false
        this.rendered = ''
        var _t = this.matrix.join('')

        for (let i = 0; i < _t.length; i++) {
            this.rendered += charset 
                                ? charset.length - 1 >= parseInt(_t[i])
                                    ? charset[parseInt(_t[i])]
                                    : '?'
                                : _t[i]
            if ((i + 1) % this.width === 0 && i !== _t.length - 1) this.rendered += '\n'
        }

        this.render_updated = true
    }

    set_cell(row, col, val) {
        var r = row - 1
        var c = col - 1

        this.matrix[c * this.height + r] = val
    }

    set_column(col, val) {
        if (Array.isArray(val)) {
            for (let i = 0; i < this.height; i++) {
                this.matrix[i * this.height + col - 1] = val[i]
            }
        } else {
            for (let i = 0; i < this.height; i++) {
                this.matrix[i * this.height + col - 1] = val
            }
        }
    }

    set_row(row, val) {
        if (Array.isArray(val)) {
            for (let i = 0; i < this.width; i++) {
                this.matrix[(row - 1) * this.height + i] = val[i]
            }
        } else {
            //this.matrix.splice((row - 1) * this.height, this.width, val)
            for (let i = 0; i < this.width; i++) {
                this.matrix[(row - 1) * this.height + i] = val 
            }
        }
    }
}

module.exports = { Screen }
