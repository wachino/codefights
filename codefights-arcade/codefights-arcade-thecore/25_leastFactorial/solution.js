function leastFactorial(n) {
  var f = 1;
  var i = 1;
  while (f < n) {
    f *= ++i;
  }
  return f;
}
