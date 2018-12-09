/*Please add ; after each select statement*/
CREATE PROCEDURE marketReport()
BEGIN
	SELECT IFNULL(country, 'Total:') as country, COUNT(competitor) as competitors
    FROM foreignCompetitors
    GROUP BY country WITH ROLLUP;
END