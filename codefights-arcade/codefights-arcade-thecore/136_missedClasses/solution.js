function missedClasses(year, daysOfTheWeek, holidays) {
  var date = new Date();
  daysOfTheWeek = daysOfTheWeek.map((d) => d % 7);
  var makeUpDays = 0;
  for (var i = 0; i < holidays.length; i++) {
    if (Number(holidays[i].split("-")[0]) >= 9) {
      date.setTime(Date.parse(holidays[i] + "-" + year));
    } else {
      date.setTime(Date.parse(holidays[i] + "-" + (year + 1)));
    }
    if (daysOfTheWeek.includes(date.getDay())) {
      makeUpDays++;
    }
  }
  return makeUpDays;
}
