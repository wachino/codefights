function threeSplit(a) {
  var totalSum = a.reduce((b, c) => b + c);
  var firstSum = 0;
  var secondSum = 0;
  var thirdSum = 0;
  var ways = 0;
  for (var i = 0; i < a.length - 2; i++) {
    firstSum += a[i];
    secondSum = 0;
    for (var j = i + 1; j < a.length - 1; j++) {
      secondSum += a[j];
      if (firstSum === secondSum && secondSum === totalSum - firstSum - secondSum) {
        ways++;
      }
    }
  }
  return ways;
}
