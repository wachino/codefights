function sortByHeight(a) {
  var people = a.filter((el) => el != -1);
  people.sort((a, b) => b - a);
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = people.pop();
    }
  }
  return a;
}
