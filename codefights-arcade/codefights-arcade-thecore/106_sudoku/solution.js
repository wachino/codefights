function sudoku(grid) {
  var ret = true;
  ret = grid.every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));
  ret =
    ret &&
    grid[0]
      .map((c, i) => grid.map((_, j) => grid[j][i]))
      .every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));

  ret =
    ret &&
    grid
      .map((_, i) =>
        grid.map(
          (_, j) =>
            grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
              (i % 3) * 3 + (j % 3)
            ]
        )
      )
      .every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));
  return ret;
}
