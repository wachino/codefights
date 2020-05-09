function bishopAndPawn(bishop, pawn) {
  var bishopCoords = bishop.split("");
  var pawnCoords = pawn.split("");
  bishopCoords[0] = 1 + bishopCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords[1] = Number(bishopCoords[1]);
  pawnCoords[0] = 1 + pawnCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  pawnCoords[1] = Number(pawnCoords[1]);
  return (
    bishopCoords[0] - bishopCoords[1] === pawnCoords[0] - pawnCoords[1] ||
    bishopCoords[0] + bishopCoords[1] === pawnCoords[0] + pawnCoords[1]
  );
}
