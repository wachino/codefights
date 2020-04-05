function newNumeralSystem(number) {
  var n = number.charCodeAt(0) - 'A'.charCodeAt(0);
  var sol = [];
  for (var i = 0; i <= Math.floor(n / 2); i++) {
    sol.push(String.fromCharCode(i + 'A'.charCodeAt(0)) + ' + ' + String.fromCharCode(n - i + 'A'.charCodeAt(0)));
  }
  return sol;
}
