function videoPart(part, total) {
  part = part.split(":").map(Number);
  total = total.split(":").map(Number);
  var partSecs = part[0] * 3600 + part[1] * 60 + part[2];
  var totalSecs = total[0] * 3600 + total[1] * 60 + total[2];
  var mcd = gcd(partSecs, totalSecs);
  return [partSecs / mcd, totalSecs / mcd];
}

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
