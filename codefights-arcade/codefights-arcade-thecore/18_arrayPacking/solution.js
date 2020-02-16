function arrayPacking(a) {
	while (a.length < 4)
		a.push(0);
	return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0];
}
