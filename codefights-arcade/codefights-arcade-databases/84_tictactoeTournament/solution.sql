/*Please add ; after each select statement*/
CREATE FUNCTION getWinner(board VARCHAR(9))
RETURNS INT
BEGIN
    DECLARE ret INT DEFAULT 0;
    
    IF (SUBSTRING(board, 1, 1)='X' AND SUBSTRING(board, 2, 1)='X' AND SUBSTRING(board, 3, 1)='X') OR (SUBSTRING(board, 4, 1)='X' AND SUBSTRING(board, 5, 1)='X' AND SUBSTRING(board, 6, 1)='X') OR (SUBSTRING(board, 7, 1)='X' AND SUBSTRING(board, 8, 1)='X' AND SUBSTRING(board, 9, 1)='X') OR (SUBSTRING(board, 1, 1)='X' AND SUBSTRING(board, 4, 1)='X' AND SUBSTRING(board, 7, 1)='X') OR (SUBSTRING(board, 2, 1)='X' AND SUBSTRING(board, 5, 1)='X' AND SUBSTRING(board, 8, 1)='X') OR (SUBSTRING(board, 3, 1)='X' AND SUBSTRING(board, 6, 1)='X' AND SUBSTRING(board, 9, 1)='X') OR (SUBSTRING(board, 1, 1)='X' AND SUBSTRING(board, 5, 1)='X' AND SUBSTRING(board, 9, 1)='X') OR (SUBSTRING(board, 3, 1)='X' AND SUBSTRING(board, 5, 1)='X' AND SUBSTRING(board, 7, 1)='X')
    THEN
        SET ret = 2;
    ELSEIF (SUBSTRING(board, 1, 1)='O' AND SUBSTRING(board, 2, 1)='O' AND SUBSTRING(board, 3, 1)='O') OR (SUBSTRING(board, 4, 1)='O' AND SUBSTRING(board, 5, 1)='O' AND SUBSTRING(board, 6, 1)='O') OR (SUBSTRING(board, 7, 1)='O' AND SUBSTRING(board, 8, 1)='O' AND SUBSTRING(board, 9, 1)='O') OR (SUBSTRING(board, 1, 1)='O' AND SUBSTRING(board, 4, 1)='O' AND SUBSTRING(board, 7, 1)='O') OR (SUBSTRING(board, 2, 1)='O' AND SUBSTRING(board, 5, 1)='O' AND SUBSTRING(board, 8, 1)='O') OR (SUBSTRING(board, 3, 1)='O' AND SUBSTRING(board, 6, 1)='O' AND SUBSTRING(board, 9, 1)='O') OR (SUBSTRING(board, 1, 1)='O' AND SUBSTRING(board, 5, 1)='O' AND SUBSTRING(board, 9, 1)='O') OR (SUBSTRING(board, 3, 1)='O' AND SUBSTRING(board, 5, 1)='O' AND SUBSTRING(board, 7, 1)='O')
    THEN 
        SET ret = 1;
    END IF;
    RETURN ret;
END;

CREATE PROCEDURE tictactoeTournament()
BEGIN
    DROP TABLE IF EXISTS names;
    CREATE TEMPORARY TABLE names AS
        SELECT DISTINCT name FROM (SELECT name_naughts AS name FROM results UNION
                                  SELECT name_crosses AS name FROM results) t;
    DROP TABLE IF EXISTS res;
	CREATE TABLE res AS SELECT *, getWinner(board) AS winner FROM results;
    
    DROP TABLE IF EXISTS last;
    CREATE TABLE last AS
    SELECT name, (SELECT COUNT(*) FROM results WHERE name = name_naughts)  + (SELECT COUNT(*) FROM results WHERE name = name_crosses) AS played, (SELECT COUNT(*) FROM res WHERE name=name_naughts AND winner=1) + (SELECT COUNT(*) FROM res WHERE name=name_crosses AND winner=2) AS won, (SELECT COUNT(*) FROM res WHERE name=name_naughts AND winner=0) + (SELECT COUNT(*) FROM res WHERE name=name_crosses AND winner=0) AS draw, (SELECT COUNT(*) FROM res WHERE name=name_crosses AND winner=1) + (SELECT COUNT(*) FROM res WHERE name=name_naughts AND winner=2) AS lost FROM names;

    SELECT name, 2*won + draw AS points, played, won, draw, lost FROM last
    ORDER BY points DESC, played ASC, won DESC, name ASC;
    
END