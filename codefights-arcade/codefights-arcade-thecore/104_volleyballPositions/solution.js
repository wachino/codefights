function volleyballPositions(formation, k) {
  var rotations = [
    [0, 1],
    [1, 0],
    [3, 0],
    [2, 1],
    [3, 2],
    [1, 2],
  ];
  var initial = formation.map((row) => row.slice());
  k = 6 - (k % 6);
  for (var i = 0; i < 6; i++) {
    initial[rotations[i][0]][rotations[i][1]] =
      formation[rotations[(i + k) % 6][0]][rotations[(i + k) % 6][1]];
  }
  return initial;
}
