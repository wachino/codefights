function integerToStringOfFixedWidth(number, width) {
  return ("0".repeat(width) + number).substr(-width);
}
