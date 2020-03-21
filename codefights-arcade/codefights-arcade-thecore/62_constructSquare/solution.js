function constructSquare(s) {
  var min = Number(
    "1" +
      Array(Math.floor((s.length - 1) / 2))
        .fill(0)
        .join("")
  );
  var max = Number(
    Array(Math.ceil(s.length / 2))
      .fill(9)
      .join("")
  );
  var d = getDigitsCount(s);
  for (var i = max + 1; i >= min - 1; i--) {
    if (getDigitsCount(String(i * i)) === d) return i * i;
  }
  return -1;

  function getDigitsCount(str) {
    var d = [];
    while (str.length) {
      var c = str[0];
      d.push(str.length - (str = str.replace(new RegExp(c, "g"), "")).length);
    }
    return d.sort((a, b) => b - a).join("");
  }
}
