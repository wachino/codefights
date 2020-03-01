function makeArrayConsecutive2(statues) {
  var s = 0;
  statues.sort((a, b) => a - b);
  for (var i = 1; i < statues.length; i++) {
    s += statues[i] - statues[i - 1] - 1;
  }
  return s;
}
