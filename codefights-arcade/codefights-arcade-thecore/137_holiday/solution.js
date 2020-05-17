function holiday(x, weekDay, month, yearNumber) {
  var date = new Date();
  date.setTime(Date.parse(month + "-01-" + yearNumber));
  var initMonth = date.getMonth();
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = 0;
  while (x > 0) {
    if (daysOfWeek[date.getDay()] === weekDay) {
      x--;
      if (date.getMonth() !== initMonth) {
        return -1;
      }
    }
    date.setDate(date.getDate() + 1);
    day++;
  }
  return day;
}
