function stringsCrossover(inputArray, result) {
  var pairs = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    for (var j = i + 1; j < inputArray.length; j++) {
      if (possibleCrossover(inputArray[i], inputArray[j], result)) {
        pairs++;
      }
    }
  }
  return pairs;
}

function possibleCrossover(A, B, result) {
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== result[i] && B[i] !== result[i]) {
      return false;
    }
  }
  return true;
}
