function bishopAndPawn(bishop, pawn) {
    pawn = pawn.split('');
    pawn[1] = Number(pawn[1])
    pawn[0] = pawn[0].charCodeAt(0)-'a'.charCodeAt(0)+1;
    bishop = bishop.split('');
    bishop[1] = Number(bishop[1])
    bishop[0] = bishop[0].charCodeAt(0)-'a'.charCodeAt(0)+1;
    return Math.abs(pawn[0]-pawn[1]) === Math.abs(bishop[0]-bishop[1]) ||
         Math.abs(pawn[0]+pawn[1]) === Math.abs(bishop[0]+bishop[1])
}
