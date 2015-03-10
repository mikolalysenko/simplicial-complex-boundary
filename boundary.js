'use strict'

module.exports = boundary

var sc = require('simplicial-complex')

function boundary(cells) {
  var bnd = sc.boundary(cells)
  var result = []
  for(var i=0; i<bnd.length; ++i) {
    if(i+1 < bnd.length && sc.compareCells(bnd[i], bnd[i+1]) === 0) {
      ++i
      continue
    }
    result.push(bnd[i])
  }
  return result
}