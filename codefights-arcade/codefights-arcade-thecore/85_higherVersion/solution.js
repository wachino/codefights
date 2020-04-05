function higherVersion(ver1, ver2) {
  var ver1Arr = ver1.split('.').map(Number);
  var ver2Arr = ver2.split('.').map(Number);
  for (var i = 0; i < ver1Arr.length; i++) {
    if (ver1Arr[i] > ver2Arr[i]) {
      return true;
    } else if (ver1Arr[i] < ver2Arr[i]) {
      return false;
    }
  }
  return false;
}
