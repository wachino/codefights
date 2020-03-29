function minimalNumberOfCoins(coins, price) {
  var count = 0;
  coins.reverse();
  for (var i = 0; i < coins.length; i++) {
    if (price >= coins[i]) {
      count += Math.floor(price / coins[i])
      price = price % coins[i];
    }
  }
  coins.reverse()
  return count;
}
