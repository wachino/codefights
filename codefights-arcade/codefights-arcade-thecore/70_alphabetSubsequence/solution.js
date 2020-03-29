function alphabetSubsequence(s) {
  var isSubsequence = true;
  for (var i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) <= s.charCodeAt(i - 1))
      isSubsequence = false;
  }

  return isSubsequence;
}
