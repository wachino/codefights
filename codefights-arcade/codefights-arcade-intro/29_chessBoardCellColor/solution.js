function chessBoardCellColor(cell1, cell2) {
    return cell1.split('').reduce((a,b)=> 
                                  Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b)%2)  === cell2.split('').reduce((a,b)=> 
                                  Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b)%2)
}
