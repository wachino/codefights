function isPower(n) {
  var i = 2;
  while (Math.pow(n, 1 / i) >= 2) {
    if (Math.ceil(Math.pow(Math.round(Math.pow(n, 1 / i)), i) == n))
      return true;
    i++;
  }
  return n === 1;
}
