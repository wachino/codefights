function mostFrequentDigitSum(n) {
  var count = [1];
  var sx;
  while (n) {
    sx = String(n)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    count[sx] = -~count[sx];
    n -= sx;
  }
  var max = 1;
  var maxn = 0;
  for (var i in count) {
    if (count[i] >= max) {
      max = count[i];
      maxn = i;
    }
  }
  return Number(maxn);
}
