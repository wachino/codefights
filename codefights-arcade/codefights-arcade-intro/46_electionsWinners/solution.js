function electionsWinners(votes, k) {
    var max = Math.max(...votes);
    var count = 0;
    if (k==0 && votes.filter((a)=>a==max).length>1)
        return 0
    for(var i = 0; i < votes.length; i++) {
        if(votes[i] + k > max || k === 0 && votes[i] == max)
            count++;
    }
    return count;
}
