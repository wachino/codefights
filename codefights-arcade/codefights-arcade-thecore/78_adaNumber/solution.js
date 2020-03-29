function adaNumber(line) {
  var parsed = line.toLowerCase().replace(new RegExp('_', 'g'), '').split('#');
  var isValid = parsed.length === 1 || parsed.length === 3;
  var base;
  var number;
  if (parsed.length === 1) {
    base = 10;
    number = parsed[0];
  } else {
    [base, number] = parsed;
  }
  base = Number(base);
  isValid = isValid && base >= 2 && base <= 16;
  return isValid && number.length && number.split('').every(digit => digit === parseInt(digit, base).toString(base));
}
