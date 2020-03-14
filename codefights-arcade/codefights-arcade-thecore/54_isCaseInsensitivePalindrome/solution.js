function isCaseInsensitivePalindrome(inputString) {
  return (
    inputString.toLowerCase() ===
    inputString
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}
