function isSumOfConsecutive2(n) {
  var r = 0;
  for (var i = 2; i < n / 2; i++) {
    if (i % 2) {
      if (Math.round(n / i) * i == n && n / i > i / 2)
        r++;
    } else {
      if (Math.floor(n / i) * i != n && (Math.floor(n / i) + Math.ceil(n / i)) == n * 2 / i && n / i > i / 2)
        r++;
    }
  }
  return r;
}
