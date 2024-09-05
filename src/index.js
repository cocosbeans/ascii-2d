const { Draw } = require('./draw.js')
const { Screen } = require('./screen.js')

const screen = new Screen(9, 3)
const draw = new Draw({autorefresh: true})

const charset = [
    '.',
    '▮',
    '#',
    '-',
    '|'
]

screen.grab_charset(charset)
screen.build()

draw.refresh(screen)
draw.rect_fill(screen, 1, 1, 4, 3, 2)

console.log(screen.rendered)