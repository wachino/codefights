function chessKnightMoves(cell) {
  var posibleMoves = ([i, j]) => [
    [i - 2, j - 1],
    [i - 1, j - 2],
    [i - 2, j + 1],
    [i - 1, j + 2],
    [i + 2, j - 1],
    [i + 1, j - 2],
    [i + 2, j + 1],
    [i + 1, j + 2],
  ];
  cellCoords = cell.split("");
  cellCoords[0] = 1 + cellCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  cellCoords[1] = Number(cellCoords[1]);
  return posibleMoves(cellCoords).filter(
    (c) => c[0] > 0 && c[0] < 9 && c[1] > 0 && c[1] < 9
  ).length;
}
