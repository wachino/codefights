function beautifulText(inputString, l, r) {
  var copy;
  var beautiful;
  var beauLen = [];
  if (inputString.length < l) {
    return false;
  } else if (inputString.length <= r) {
    return true;
  }
  while (l <= r) {
    var row = 0;
    beautiful = [[]];
    copy = inputString.split(" ");
    beauLen = Array(copy.length).fill(0);
    while (beauLen[row] < l) {
      beautiful[row].push(copy.shift());
      beauLen[row] =
        beautiful[row].reduce((a, b) => a + b.length, 0) +
        (beautiful[0].length - 1);
    }
    l = beauLen[0] + 1;
    if (beauLen[0] > r) {
      return false;
    }
    while (copy.length) {
      row++;
      beautiful[row] = [];
      while (copy.length && beauLen[row] < beauLen[row - 1]) {
        beautiful[row].push(copy.shift());
        beauLen[row] =
          beautiful[row].reduce((a, b) => a + b.length, 0) +
          (beautiful[row].length - 1);
      }
      if (beauLen[row] > beauLen[row - 1]) {
        break;
      }
    }
    if (copy.length === 0 && beauLen[row] === beauLen[row - 1]) {
      return true;
    }
  }
  return false;
}
