function differentSquares(matrix) {
  var acc = {};
  for (var i = 0; i < matrix.length - 1; i++) {
    for (var j = 0; j < matrix[i].length - 1; j++) {
      var square = matrix.slice(i, i + 2).map(r => r.slice(j, j + 2));
      acc[square[0].join("") + square[1].join("")] = 1;
    }
  }
  var ret = 0;
  for (var f in acc) {
    ret += acc[f];
  }
  return ret;
}
