function countBlackCells(n, m) {
  var s;
  if (n > m) {
    s = n;
    n = m;
    m = s;
  }
  s = 0;
  var r = 0;
  var t = 0;
  for (var i = 0; i < n / gcd(m, n); i++) {
    t = m / n + r;
    s += Math.ceil(t);
    r = (t - 0.000001) % 1;
  }
  function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }
  return gcd(m, n) * s + (gcd(m, n) - 1) * 2;
}
