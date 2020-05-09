function bishopDiagonal(bishop1, bishop2) {
  var bishopCoords1 = bishop1.split("");
  var bishopCoords2 = bishop2.split("");
  var tmp;
  bishopCoords1[0] = 1 + bishopCoords1[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords1[1] = Number(bishopCoords1[1]);
  bishopCoords2[0] = 1 + bishopCoords2[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords2[1] = Number(bishopCoords2[1]);
  var newPos1 = bishopCoords1.slice();
  var newPos2 = bishopCoords2.slice();
  if (
    bishopCoords1[0] + bishopCoords1[1] ===
    bishopCoords2[0] + bishopCoords2[1]
  ) {
    if (bishopCoords1[0] + bishopCoords1[1] > 9) {
      newPos1[0] = 8;
      newPos2[1] = 8;
      newPos1[1] = bishopCoords1[0] + bishopCoords1[1] - 8;
      newPos2[0] = bishopCoords1[0] + bishopCoords1[1] - 8;
    } else {
      newPos1[0] = 1;
      newPos2[1] = 1;
      newPos1[1] = bishopCoords1[0] + bishopCoords1[1] - 1;
      newPos2[0] = bishopCoords1[0] + bishopCoords1[1] - 1;
    }
  } else if (
    bishopCoords1[0] - bishopCoords1[1] ===
    bishopCoords2[0] - bishopCoords2[1]
  ) {
    if (bishopCoords1[0] - bishopCoords1[1] < 0) {
      newPos1[0] = 1;
      newPos1[1] = 1 + bishopCoords1[1] - bishopCoords1[0];
      newPos2[0] = 8 + bishopCoords1[0] - bishopCoords1[1];
      newPos2[1] = 8;
    } else {
      newPos1[0] = 1 + bishopCoords1[0] - bishopCoords1[1];
      newPos1[1] = 1;
      newPos2[0] = 8;
      newPos2[1] = 8 - (bishopCoords1[0] - bishopCoords1[1]);
    }
  }

  newPos1[0] = String.fromCharCode(newPos1[0] - 1 + "a".charCodeAt(0));
  newPos1 = newPos1.join("");
  newPos2[0] = String.fromCharCode(newPos2[0] - 1 + "a".charCodeAt(0));
  newPos2 = newPos2.join("");
  return [newPos1, newPos2].sort();
}
