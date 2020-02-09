function knapsackLight(value1, weight1, value2, weight2, maxW) {
	var val;
	if (value2 > value1) {
		val = value1;
		value1 = value2;
		value2 = val;
		val = weight1;
		weight1 = weight2;
		weight2 = val;
	}
	val = 0;
	if (weight1 <= maxW) {
		val += value1;
		maxW -= weight1
	}
	if (weight2 <= maxW)
		val += value2;

	return val;

}
