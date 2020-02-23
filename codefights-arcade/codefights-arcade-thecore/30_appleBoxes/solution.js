function appleBoxes(k) {
  var i = (k + (k % 2)) / 2;
  return i * (2 * i + 1) - (k % 2) * (4 * i * i);
}
