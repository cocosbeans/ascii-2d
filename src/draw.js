class Draw {
    constructor(options = { autorefresh: false }) {
        this.autorefresh = options.autorefresh
    }

    border(screen, val) {
        this.rect(screen, 1, 1, screen.width, screen.height, val)

        if (this.autorefresh) this.refresh(screen)
    }

    rect(screen, x, y, width, height, val) {
        

        if (this.autorefresh) this.refresh(screen)
    }

    rect_fill(screen, x, y, width, height, val) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < x + width; j++) {
                if (j >= x) screen.set_cell(j, y + i, val)
            }
        }

        if (this.autorefresh) this.refresh(screen)
    }

    refresh(screen) {
        screen.render()
    }
}

module.exports = { Draw }