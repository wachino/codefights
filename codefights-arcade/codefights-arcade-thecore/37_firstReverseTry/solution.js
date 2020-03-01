function firstReverseTry(arr) {
  if (arr.length < 2) return arr;

  var first = arr.shift();
  var last = arr.pop();
  return [last, ...arr, first];
}
