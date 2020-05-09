function whoseTurn(p) {
  p = p.split(";").map((k) => getPosition(k));
  return (
    (p[0][0] + p[0][1] + p[1][0] + p[1][1]) % 2 ===
    (p[2][0] + p[2][1] + p[3][0] + p[3][1]) % 2
  );
}

function getPosition(k) {
  var pos = k.split("");
  pos[0] = 1 + pos[0].charCodeAt(0) - "a".charCodeAt(0);
  pos[1] = Number(pos[1]);
  return pos;
}
