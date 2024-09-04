const { Matrix } = require('./matrix.js')

const { border } = require('./draw.js')

let mx = new Matrix(5, 5)

border(mx, 9)

console.log(mx.matrix)