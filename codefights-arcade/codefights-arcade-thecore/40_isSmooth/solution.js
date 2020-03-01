function isSmooth(arr) {
  var midPos = Math.floor(arr.length / 2);
  var mid = arr[midPos] + (arr.length % 2 ? 0 : arr[midPos - 1]);
  return arr[0] === mid && mid === arr[arr.length - 1];
}
