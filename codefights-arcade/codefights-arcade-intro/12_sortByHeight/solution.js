function sortByHeight(a) {
    var b = a.slice();
    var pos = [];
    var i = -1;
    while ((i = a.indexOf(-1, i+1)) > -1) {
        pos.push(i);
    }
    var rpos = pos.slice();
    while(rpos.length){
        b.splice(rpos.pop(), 1);
    } 

    b.sort((a,b)=>a-b);
    while(pos.length) {
        b.splice(pos.shift(), 0, -1);
    }
    return b;
}
