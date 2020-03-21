function createAnagram(s, t) {
  s = s.split("");
  var pos;
  for (var i = 0; i < t.length; i++) {
    pos = s.indexOf(t[i]);
    if (pos >= 0) {
      s.splice(pos, 1);
    }
  }
  return s.length;
}
