function phoneCall(min1, min2_10, min11, s) {
	var t = 0;
	if (s >= min1) {
		s -= min1;
		t += 1;
	}
	if (s >= min2_10) {
		var m = Math.min(9, s / min2_10);
		t += m;
		s -= min2_10 * m;
	}
	if (s >= min11) {
		t += s / min11;
	}
	return Math.floor(t);
}
