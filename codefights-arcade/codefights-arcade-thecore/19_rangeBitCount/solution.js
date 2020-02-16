function rangeBitCount(a, b) {

	var ret = 0;
	for (var i = a; i <= b; i++) {
		ret += [0, 1, 2, 3].reduce((acc, d) => acc + ((i & 1 << d) >> d), 0);
	}
	return ret;
}
