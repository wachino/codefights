function additionWithoutCarrying(param1, param2) {
  param1 = String(param1);
  param2 = String(param2);
  var a = param1.length > param2.length ? param1 : param2;
  var b = param1.length > param2.length ? param2 : param1;

  b = ("00000" + b)
    .slice(-a.length)
    .split("")
    .map(Number);
  a = a.split("").map(Number);

  var c = a.map((el, i) => (el + b[i]) % 10);
  return Number(c.join(""));
}
