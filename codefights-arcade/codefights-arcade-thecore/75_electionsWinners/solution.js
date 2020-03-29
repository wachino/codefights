function electionsWinners(votes, k) {
  var max = Math.max(...votes);
  var numOfMax = votes.filter(v => v === max).length;
  return votes.reduce((acc, v) => acc + (v === max && numOfMax === 1 || v + k > max ? 1 : 0), 0);
}
