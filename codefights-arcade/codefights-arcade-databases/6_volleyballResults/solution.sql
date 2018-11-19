/*Please add ; after each select statement*/
CREATE PROCEDURE volleyballResults()
BEGIN
	SELECT * FROM results ORDER BY  wins;
END