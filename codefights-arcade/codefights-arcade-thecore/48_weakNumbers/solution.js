function weakNumbers(n) {
  function ndivisors(x) {
    var ret = 0;
    for (var i = 1; i <= x; i++) {
      if (x % i === 0)
        ret++;
    }
    return ret;
  }
  var d = Array(n).fill(0);
  var w = 0;
  var wc = 0;
  var t = 0;
  for (var i = 1; i <= n; i++) {
    t = 0;
    d[i - 1] = ndivisors(i);
    for (var j = 1; j < i; j++) {
      if (d[j - 1] > d[i - 1])
        t++;
    }
    if (t === w) {
      wc++;
    } else if (t > w) {
      w = t;
      wc = 1;
    }
  }
  return [w, wc];

}
