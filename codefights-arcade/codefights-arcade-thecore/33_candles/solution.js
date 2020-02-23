function candles(candlesNumber, makeNew) {
  var burn = 0;
  while (candlesNumber >= makeNew) {
    var v = Math.floor(candlesNumber / makeNew);
    burn += v * makeNew;
    candlesNumber = v + (candlesNumber % makeNew);
  }
  burn += candlesNumber;
  return burn;
}
