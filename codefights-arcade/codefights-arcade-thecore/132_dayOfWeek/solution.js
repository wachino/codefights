function dayOfWeek(birthdayDate) {
  var date = new Date();
  date.setTime(Date.parse(birthdayDate));
  var dow = date.getDay();
  var i = 1;
  birthdayDate = birthdayDate.replace(/(\d{4})$/, (_, y) => Number(y) + 1);
  date.setTime(Date.parse(birthdayDate));
  while (
    Number(birthdayDate.split("-")[0]) !== date.getMonth() + 1 ||
    date.getDay() !== dow
  ) {
    i++;
    birthdayDate = birthdayDate.replace(/(\d{4})$/, (_, y) => Number(y) + 1);
    date.setTime(Date.parse(birthdayDate));
  }
  return i;
}
