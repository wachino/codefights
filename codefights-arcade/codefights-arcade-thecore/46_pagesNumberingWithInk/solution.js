function pagesNumberingWithInk(current, numberOfDigits) {

  var n;
  while (numberOfDigits > 0) {
    if (current >= 1000) {
      n = Math.floor(numberOfDigits / 4);
      numberOfDigits = 0;
      current += n;
    } else if (current >= 100) {
      n = Math.min(1000 - current, Math.floor(numberOfDigits / 3))
      current += n;
      numberOfDigits -= n * 3;
      if (numberOfDigits < 4)
        numberOfDigits = 0
    } else if (current >= 10) {
      n = Math.min(100 - current, Math.floor(numberOfDigits / 2))
      current += n;
      numberOfDigits -= n * 2;
      if (numberOfDigits < 3)
        numberOfDigits = 0;
    } else {
      n = Math.min(10 - current, numberOfDigits)
      current += n;
      numberOfDigits -= n;
    }
  }
  return current - 1;
}
