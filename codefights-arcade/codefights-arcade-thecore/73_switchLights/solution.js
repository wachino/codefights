function switchLights(a) {
  var rightOn = a.reduce((b, c) => b + c);
  return a.map(function (candle) {
    rightOn -= candle;
    return rightOn % 2;
  });
}
