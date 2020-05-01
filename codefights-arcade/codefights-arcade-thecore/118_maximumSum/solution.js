function maximumSum(a, q) {
  a.sort((b, c) => b - c);
  var counts = a.map((b, i) => ({
    i,
    c: q.reduce((acc, query) => acc + (i >= query[0] && i <= query[1]), 0),
  }));
  counts.sort((b, c) => c.c - b.c);
  var solution = Array(counts.length);
  for (var i = 0; i < counts.length; i++) {
    solution[counts[i].i] = a.pop() * counts[i].c;
  }
  return solution.reduce((b, c) => b + c);
}
