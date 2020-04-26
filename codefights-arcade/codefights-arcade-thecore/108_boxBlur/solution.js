function boxBlur(image) {
  var adjacents = ([i, j]) => [
    [i, j],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  var bluried = image.slice(2).map((r) => r.slice(2));
  for (var i = 1; i < image.length - 1; i++) {
    for (var j = 1; j < image[i].length - 1; j++) {
      bluried[i - 1][j - 1] = Math.floor(
        adjacents([i, j]).reduce((acc, el) => acc + image[el[0]][el[1]], 0) / 9
      );
    }
  }

  return bluried;
}
