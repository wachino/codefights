function curiousClock(someTime, leavingTime) {
  var date = new Date();
  date.setTime(2 * Date.parse(someTime) - Date.parse(leavingTime));
  var year = date.getFullYear();
  var month = "0" + (date.getMonth() + 1);
  var day = "0" + date.getDate();
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  return `${year}-${month.substr(-2)}-${day.substr(-2)} ${hours.substr(
    -2
  )}:${minutes.substr(-2)}`;
}
