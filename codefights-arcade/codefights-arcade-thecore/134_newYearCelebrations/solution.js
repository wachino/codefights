function newYearCelebrations(takeOffTime, minutes) {
  if (takeOffTime === "00:00") {
    takeOffTime = "2019-01-01 " + takeOffTime;
  } else {
    takeOffTime = "2018-12-31 " + takeOffTime;
  }
  var celebrations = 0;
  var date = new Date();
  var accuTime = 0;
  date.setTime(Date.parse(takeOffTime));
  var year = date.getFullYear();
  var lastYear = year;
  for (var i = 0; i < minutes.length; i++) {
    minutes[i] -= accuTime;
    if (date.getHours() === 0 && date.getMinutes() === 0) {
      celebrations++;
    }
    date.setMinutes(date.getMinutes() + minutes[i]);
    if (lastYear < date.getFullYear()) {
      celebrations++;
    }
    date.setHours(date.getHours() - 1);
    lastYear = date.getFullYear();
    accuTime += minutes[i];
  }

  if (
    date.getFullYear() === 2018 ||
    (date.getHours() === 0 && date.getMinutes() === 0)
  ) {
    celebrations++;
  }

  return celebrations;
}
