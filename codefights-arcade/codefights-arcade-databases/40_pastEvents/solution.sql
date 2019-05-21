/*Please add ; after each select statement*/
CREATE PROCEDURE pastEvents()
BEGIN
	SELECT name, event_date
    FROM Events, (select MAX(event_date) as maxdate FROM Events) t
    WHERE DATEDIFF(maxdate,event_date) <= 7
    ORDER BY event_date DESC
    LIMIT 1, 99999;
END