function stringsConstruction(a, b) {
  var count = 0;
  var finding = true;
  var pos;
  b = b.split("");
  while (finding) {
    for (var i = 0; i < a.length; i++) {
      pos = b.indexOf(a[i]);
      if (pos >= 0) {
        b.splice(pos, 1);
      } else {
        finding = false;
        break;
      }
    }
    if (finding) {
      count++;
    }
  }
  return count;
}
