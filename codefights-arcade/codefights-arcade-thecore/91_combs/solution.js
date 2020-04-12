function combs(comb1, comb2) {
  var binStr1 = comb1
    .replace(new RegExp("[*]", "g"), "1")
    .replace(new RegExp("[.]", "g"), "0");
  var binStr2 = comb2
    .replace(new RegExp("[*]", "g"), "1")
    .replace(new RegExp("[.]", "g"), "0");
  var offset1 = binStr2.length;
  var lengthStrs = binStr1.length + binStr2.length;
  var min = lengthStrs;
  var tmin;
  var bin1 = parseInt(binStr1, 2) << offset1;
  var bin2 = parseInt(binStr2, 2);
  for (var i = 0; i < lengthStrs; i++) {
    tmin = Math.max(i + binStr2.length, lengthStrs) - Math.min(i, offset1);
    if (!(bin1 & (bin2 << i)) && tmin < min) {
      min = tmin;
    }
  }
  return min;
}
