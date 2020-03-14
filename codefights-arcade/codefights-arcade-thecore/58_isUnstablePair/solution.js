function isUnstablePair(filename1, filename2) {
  return (
    filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
  );
}
