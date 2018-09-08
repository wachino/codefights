function evenDigitsOnly(n) {
    return String(n).split('').every(d=>d%2==0)
}
