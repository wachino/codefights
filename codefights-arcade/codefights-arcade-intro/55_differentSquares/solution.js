function differentSquares(matrix) {
    var d = [];
    for(var i = 1;  i < matrix.length; i++) {
        for (var j = 1; j < matrix[i].length; j++) {
            if(not(i,j)){
                d.push([
                    [
                        matrix[i-1][j-1],
                        matrix[i-1][j]
                    ],[
                        matrix[i][j-1],
                        matrix[i][j]
                    ]
                ]);
            }
        }
    }
    
    function not(i, j) {
        return d.every(c=>{
           return c[0][0] !== matrix[i-1][j-1] ||
               c[0][1] !== matrix[i-1][j] || 
               c[1][0] !== matrix[i][j-1] ||
               c[1][1] !== matrix[i][j]
        });
    }
    return d.length;
}
