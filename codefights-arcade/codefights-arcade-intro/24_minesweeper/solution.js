function minesweeper(matrix) {
    return matrix.map((l,i) => 
            l.map((e,j) => 
                 matrix.slice(Math.max(0, i-1), i+2).map(f=>
                    f.slice(Math.max(0, j-1), j+2).reduce((a,b)=>a+b)).reduce((a,b)=>a+b) - e
            )
     )
}

