function swapDiagonals(matrix) {
  var reversed = matrix.map((row) => row.slice());
  var n = matrix.length;
  for (var i = 0; i < n; i++) {
    reversed[i][i] = matrix[i][n - i - 1];
    reversed[i][n - i - 1] = matrix[i][i];
  }
  return reversed;
}
