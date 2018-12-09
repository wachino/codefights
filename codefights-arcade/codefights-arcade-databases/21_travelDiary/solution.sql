/*Please add ; after each select statement*/
CREATE PROCEDURE travelDiary()
BEGIN
	SELECT GROUP_CONCAT(t.country SEPARATOR ';') AS countries 
    FROM (SELECT DISTINCT country FROM diary ORDER BY country) t;
END