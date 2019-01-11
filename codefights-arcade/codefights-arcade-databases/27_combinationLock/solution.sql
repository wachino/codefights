/*Please add ; after each select statement*/
CREATE PROCEDURE combinationLock()
BEGIN
	SELECT ROUND(EXP(SUM(LOG(CHAR_LENGTH(characters))))) AS combinations
    FROM discs;
END