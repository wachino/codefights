function lineUp(commands) {
  var c = {
    L: 1,
    R: 3,
    A: 2
  };
  var d = {
    R: 1,
    L: 3,
    A: 2
  };
  var e = 0;
  var f = 0;
  var ret = 0;
  for (var i = 0; i < commands.length; i++) {
    var cmd = commands[i];
    e = (e + c[cmd]) % 4;
    f = (f + d[cmd]) % 4;
    if (e === f) ret++;
  }
  return ret;
}
