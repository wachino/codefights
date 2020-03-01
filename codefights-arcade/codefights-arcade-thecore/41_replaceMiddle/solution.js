function replaceMiddle(arr) {
  if (arr.length % 2 === 0) {
    var midPos = Math.floor(arr.length / 2);
    var mid = arr[midPos] + arr[midPos - 1];
    arr.splice(midPos - 1, 2, mid);
  }
  return arr;
}
