function isInformationConsistent(evidences) {
  var transpose = evidences[0].map((_, c) =>
    evidences.map((_, i) => evidences[i][c])
  );
  return transpose.every(
    (row) => Math.max(...row) <= 0 || Math.min(...row) >= 0
  );
}
