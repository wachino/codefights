function squareDigitsSequence(a0) {
  var h = [a0];

  var n = String(a0).split('').map(Number).map(el => el * el).reduce((a, b) => a + b);
  while (h.indexOf(n) < 0) {
    h.push(n);
    n = String(n).split('').map(Number).map(el => el * el).reduce((a, b) => a + b);
  }
  return h.length + 1;
}
