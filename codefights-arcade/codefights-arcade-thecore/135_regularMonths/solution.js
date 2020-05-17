function regularMonths(currMonth) {
  currMonth = currMonth.split("-").join("-01-");
  var date = new Date();
  date.setTime(Date.parse(currMonth));
  date.setMonth(date.getMonth() + 1);
  while (date.getDay() !== 1) {
    date.setMonth(date.getMonth() + 1);
  }

  return `${("0" + (date.getMonth() + 1)).substr(-2)}-${date.getFullYear()}`;
}
