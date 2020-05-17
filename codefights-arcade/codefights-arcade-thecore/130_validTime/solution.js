function validTime(time) {
  time = time.split(":").map(Number);
  return time[0] < 24 && time[1] < 60;
}
