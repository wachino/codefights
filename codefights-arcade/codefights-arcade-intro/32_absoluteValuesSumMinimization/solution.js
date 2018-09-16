function absoluteValuesSumMinimization(a) {
    return a[Math.floor(a.length/2) - (a.length%2?0:1)];
}
