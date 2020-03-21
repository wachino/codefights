function numberOfClans(divisors, k) {
  var clans = Array(1024).fill(0);
  var c = 0;
  for (var i = 1; i <= k; i++) {
    c = 0;
    for (var j = 0; j < divisors.length; j++) {
      if (i % divisors[j] === 0) {
        c = c | (1 << j);
      }
    }
    clans[c] = 1;
  }
  return clans.reduce((a, b) => a + b);
}
