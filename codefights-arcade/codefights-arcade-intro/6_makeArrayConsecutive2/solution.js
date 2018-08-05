function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}
