function starRotation(matrix, width, center, t) {
  var rotations = [
    (i) => [center[0] - i, center[1]],
    (i) => [center[0] - i, center[1] + i],
    (i) => [center[0], center[1] + i],
    (i) => [center[0] + i, center[1] + i],
    (i) => [center[0] + i, center[1]],
    (i) => [center[0] + i, center[1] - i],
    (i) => [center[0], center[1] - i],
    (i) => [center[0] - i, center[1] - i],
  ];
  var rotated = matrix.map((row) => row.slice());
  t = t % 8;
  for (var i = 1; i <= (width - 1) / 2; i++) {
    for (var j = 0; j < 8; j++) {
      rotated[rotations[(j + t) % 8](i)[0]][rotations[(j + t) % 8](i)[1]] =
        matrix[rotations[j](i)[0]][rotations[j](i)[1]];
    }
  }
  return rotated;
}
