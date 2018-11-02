function sudoku(grid) {
  return grid.every((row, i)=>{
      return row.every((el,j)=>{
          return grid.every((r,k)=>{
              return (i == k || el !== grid[k][j]) &&
                  (j == k || el !== grid[i][k]);
          });
      });
  }) && [0,1,2].every((i)=>[0,1,2].every(j=>{
      var tmp = grid.slice(i*3,i*3+3).map(r=>r.slice(3*j, 3*j+3));
      return tmp.reduce((a,b)=>a.concat(b)).filter((el,id,self)=>self.indexOf(el)===id).length === 9;
  }));
}
