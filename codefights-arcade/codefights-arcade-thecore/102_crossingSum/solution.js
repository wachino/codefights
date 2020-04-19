function crossingSum(matrix, a, b) {
  return (
    matrix[a].reduce((c, d) => c + d) +
    matrix.reduce((acc, row) => acc + row[b], 0) -
    matrix[a][b]
  );
}
