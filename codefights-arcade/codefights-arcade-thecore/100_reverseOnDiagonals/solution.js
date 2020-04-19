function reverseOnDiagonals(matrix) {
  var reversed = matrix.map((row) => row.slice());
  var n = matrix.length;
  for (var i = 0; i < n; i++) {
    reversed[i][i] = matrix[n - 1 - i][n - 1 - i];
    reversed[n - i - 1][i] = matrix[i][n - i - 1];
  }
  return reversed;
}
