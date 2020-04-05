function characterParity(symbol) {
  var isDigit = /^\d{1}$/.test(symbol);
  var isEven;
  if (isDigit) {
    isEven = Number(symbol) % 2 === 0;
  }
  return isDigit ? isEven ? "even" : "odd" : "not a digit";
}
