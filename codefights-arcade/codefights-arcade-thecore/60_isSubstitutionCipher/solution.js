function isSubstitutionCipher(string1, string2) {
  var a;
  var b;
  var ret = string1.length === string2.length;
  var t = 2;
  var aux;
  var pos;
  while (t--) {
    for (var i = 0; i < string1.length; i++) {
      a = string1[i];
      b = string2[i];
      pos = string1.indexOf(a, i + 1);
      while (pos >= 0) {
        if (string2[pos] != b) {
          ret = false;
        }
        pos = string1.indexOf(a, pos + 1);
      }
    }

    aux = string1;
    string1 = string2;
    string2 = aux;
  }

  return ret;
}
