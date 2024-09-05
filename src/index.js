const { Matrix } = require('./matrix.js')
const { Draw } = require('./draw.js')

const charset = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};\':",./<>?\\|`'.split('')

let map = new Draw(160, 30)

map.border(charset.indexOf('#'))
//map.rectFill()

//console.log(map.matrix)
console.log(map.render(charset))