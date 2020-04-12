function arrayPreviousLess(items) {
  var extendedItems = [-1].concat(items);
  var previousLess = [];
  for (var i = 1; i < extendedItems.length; i++) {
    var j = i - 1;
    while (extendedItems[j] >= extendedItems[i]) {
      j--;
    }
    previousLess.push(extendedItems[j]);
  }
  return previousLess;
}
