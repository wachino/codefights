function timedReading(maxLength, text) {
  return (text.match(/[a-zA-Z]+/g) || []).filter(s => s.length <= maxLength).length;
}
