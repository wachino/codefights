function rounders(value) {
  var l = Math.floor(Math.log10(value));
  var m = 10;
  for (i = 0; i < l; i++) {
    var r = (10 * (value % m)) / m;
    if (r < 5) {
      value -= (m * r) / 10;
    } else {
      value += (m * (10 - r)) / 10;
    }
    m *= 10;
  }
  return value;
}
