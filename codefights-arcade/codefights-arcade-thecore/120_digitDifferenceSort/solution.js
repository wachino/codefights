a = [152, 23, 7, 887, 243];
function digitDifferenceSort(a) {
  var positioned = a.map((n, i) => ({ n, i }));
  return positioned
    .sort(function (b, c) {
      var bDigits = String(b.n).split("").map(Number);
      var cDigits = String(c.n).split("").map(Number);
      var val1 = Math.max(...bDigits) - Math.min(...bDigits);
      var val2 = Math.max(...cDigits) - Math.min(...cDigits);
      return val1 !== val2 ? val1 - val2 : c.i - b.i;
    })
    .map((el) => el.n);
}
