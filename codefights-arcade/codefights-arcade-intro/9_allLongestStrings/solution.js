function allLongestStrings(inputArray) {
    return inputArray.filter(s=>s.length===Math.max(...inputArray.map(l=>l.length)));
}
