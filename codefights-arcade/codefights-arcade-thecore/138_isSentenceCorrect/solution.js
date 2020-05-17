function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^.?!]*[.?!]$/;
  return re.test(sentence);
}
