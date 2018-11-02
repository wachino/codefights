function fileNaming(names) {
    var n = [];
    
    for(var i=0; i < names.length; i++) {
        var max = 0;
        var m = [];
        var f = n.filter(j=>{
            var reg = new RegExp('^(?:' + names[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + '(?:\\((\\d+)\\))?)$');
            if(reg.test(j)) {
                if(reg.exec(j)[1] ==undefined )
                    m[0] =true;
                else {
                    m[Number(reg.exec(j)[1])] = true;
                }
            }
            return reg.test(j);
        });
        for(var k = 0; k < m.length; k++) {
            if(!m[k])
                break;
        }
        if(f.length){
            names[i] = names[i]+ (k ? ('('+ (k)+')') : '');
        }
        n.push(names[i])
    }
    return n;
    
}


