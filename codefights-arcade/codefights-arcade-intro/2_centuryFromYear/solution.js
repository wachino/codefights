function centuryFromYear(year) {
    return Math.floor(year/100) + ((year%100) ? 1 : 0)
}