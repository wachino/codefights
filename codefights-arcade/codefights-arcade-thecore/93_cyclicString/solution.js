function cyclicString(s) {
  var arr = s.split("");
  for (var i = 1; i < arr.length; i++) {
    if (isSub(arr.slice(0, i), arr.slice(i))) {
      return i;
    }
  }
  return arr.length;
}

function isSub(sub, candidate) {
  for (var i = 0; i < candidate.length; i++) {
    if (candidate[i] !== sub[i % sub.length]) {
      return false;
    }
  }
  return true;
}
