function countSumOfTwoRepresentations2(n, l, r) {
  if (2 * r < n || 2 * l > n) return 0;
  var min = Math.max(l, n - r);
  var max = Math.min(r, n - l);
  var mid = Math.floor((max + min) / 2);
  return mid - min + 1;
}
