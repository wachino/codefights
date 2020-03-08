function rectangleRotation(a, b) {
  var ld = (a / Math.sqrt(2)) / 2;
  var sd = (b / Math.sqrt(2)) / 2;
  var rectExt = [2 * Math.floor(ld) + 1, 2 * Math.floor(sd) + 1]
  var rectInt = [2 * Math.floor(ld) + (ld % 1 < 0.5 ? 0 : 2), 2 * Math.floor(sd) + (sd % 1 < 0.5 ? 0 : 2)]
  return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1]
}
