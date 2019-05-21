/*Please add ; after each select statement*/
CREATE PROCEDURE importantEvents()
BEGIN
	SELECT *
    FROM events
    ORDER BY (DAYOFWEEK(event_date) + 5) % 7, participants DESC;
END