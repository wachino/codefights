function chessKnight(cell) {
    cell = cell.split('');
    cell[0] = cell[0].charCodeAt(0) - 'a'.charCodeAt(0) +1;
    cell[1] = Number(cell[1]);
    aux = [[1,1], [1,1],[1,1],[1,1]]
    var ret = 8;
    if(cell[0] < 3){
        ret -= aux[0][0];
        ret -= aux[0][1];
        aux[0][0] = 0;
        aux[0][1] = 0;
    }
    if(cell[0] < 2) {
        ret -= aux[1][0];
        ret -= aux[1][1];
        aux[1][0] = 0;
        aux[1][1] = 0;
    }
    if(cell[0] > 6){
        ret -= aux[3][0];
        ret -= aux[3][1];
        aux[3][0] = 0;
        aux[3][1] = 0;
    }
    if(cell[0] > 7){
        ret -= aux[2][0];
        ret -= aux[2][1];
        aux[2][0] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 3){
        ret -= aux[1][1];
        ret -= aux[2][1];
        aux[1][1] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 2){
        ret -= aux[0][1];
        ret -= aux[3][1];
        aux[0][1] = 0;
        aux[3][1] = 0;
    }
    if(cell[1] > 6){
        ret -= aux[1][0];
        ret -= aux[2][0];
        aux[1][0] = 0;
        aux[2][0] = 0;
    }
    if(cell[1] > 7){
        ret -= aux[0][0];
        ret -= aux[3][0];
        aux[0][0] = 0;
        aux[3][0] = 0;
    }
    
    return ret;
}
