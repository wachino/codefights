function areSimilar(a, b) {
  var are = true;
  var av = null;
  var bv = null;
  var swap = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (av === null || bv === null) {
        av = a[i]; bv = b[i];
      } else {
        if (swap || av !== b[i] || bv !== a[i]) {
          are = false;
        }
        swap = true;
      }
    }
  }
  return are;
}
