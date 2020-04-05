function decipher(cipher) {
  var arr = cipher.split('').map(Number);
  var curr = 0;
  var ret = [];
  for (var i = 0; i < cipher.length; i++) {
    curr = curr * 10 + arr[i];
    if (curr >= 97) {
      ret.push(String.fromCharCode(curr));
      curr = 0;
    }
  }
  return ret.join('');
}
