function comfortableNumbers(l, r) {
  function s(x) {
    return String(x).split('').map(Number).reduce((a, b) => a + b);
  }
  var ret = [];
  for (var i = l; i <= r; i++) {
    for (var j = i + 1; j <= Math.min(r, i + s(i)); j++) {
      if (i === j)
        continue;
      if (i >= j - s(j) && i <= j + s(j)) {
        ret.push([i, j]);
      }
    }
  }
  return ret.filter((el, id, arr) => id === arr.findIndex(function (fl) {
    return el[0] === fl[0] && el[1] === fl[1];
  })).length;
}
