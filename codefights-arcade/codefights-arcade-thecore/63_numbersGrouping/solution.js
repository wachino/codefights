function numbersGrouping(a) {
  var groups = Array(10000).fill(false);
  for (var i = 0; i < a.length; i++) {
    groups[Math.floor((a[i] - 1) / 10000)] = true;
  }

  return a.length + groups.reduce((a, b) => a + b, 0);
}
