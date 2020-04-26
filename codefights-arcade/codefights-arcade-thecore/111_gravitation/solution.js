function gravitation(rows) {
  var copyRows = rows.slice().reverse();
  var times = copyRows[0].split("").map(function (_, c) {
    var tmp = 0;
    var secs = 0;
    for (var i = 0; i < copyRows.length; i++) {
      if (copyRows[i][c] === ".") {
        tmp++;
      } else {
        secs += tmp;
        tmp = 0;
      }
    }
    return {
      col: c,
      secs: secs,
    };
  });
  return times
    .filter((c) => c.secs === Math.min(...times.map((t) => t.secs)))
    .map((c) => c.col);
}
