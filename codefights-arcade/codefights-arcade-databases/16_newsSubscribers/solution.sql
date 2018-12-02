/*Please add ; after each select statement*/
CREATE PROCEDURE newsSubscribers()
BEGIN
	SELECT DISTINCT u.subscriber
    FROM (SELECT * FROM full_year
    UNION SELECT * FROM half_year) as u
    WHERE u.newspaper LIKE '%Daily%'
    ORDER BY u.subscriber;
END