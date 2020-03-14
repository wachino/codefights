function htmlEndTagByStartTag(startTag) {
  return "</" + /<([a-z\-A-Z]+)/.exec(startTag)[1] + ">";
}
