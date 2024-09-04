const { Matrix } = require('./matrix.js')
const { 
    border,
    fill,
    rect,
    rectFill,
    render
} = require('./draw.js')

const charset = [
    '.', '@',
    '/', '#',
    '|', '-',
    '+', '='
]

let map = new Matrix(40, 10)

border(map, 3)
rectFill(map, 4, 3, 20, 3, 2)

//console.log(map.matrix)
console.log(render(map, charset))
