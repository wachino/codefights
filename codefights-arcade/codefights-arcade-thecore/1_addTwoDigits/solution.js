function addTwoDigits(n) {
	return String(n).split('').map(Number).reduce((a, b) => a + b);
}
