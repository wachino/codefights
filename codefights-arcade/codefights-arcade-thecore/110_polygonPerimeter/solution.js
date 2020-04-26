function polygonPerimeter(matrix) {
  var adjacents = (i, j) => [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j],
  ];
  var perimeter = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      perimeter +=
        matrix[i][j] &&
        adjacents(i, j).reduce(function (acc, pos) {
          return (
            acc +
            (pos[0] < 0 ||
              pos[1] < 0 ||
              pos[0] == matrix.length ||
              pos[1] === matrix[0].length ||
              !matrix[pos[0]][pos[1]])
          );
        }, 0);
    }
  }
  return perimeter;
}
