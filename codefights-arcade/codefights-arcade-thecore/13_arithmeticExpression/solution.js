function arithmeticExpression(a, b, c) {
	var ops = [
		(d, e) => d + e,
		(d, e) => d - e,
		(d, e) => d * e,
		(d, e) => d / e
	];
	return ops.some(f => f(a, b) === c);
}
