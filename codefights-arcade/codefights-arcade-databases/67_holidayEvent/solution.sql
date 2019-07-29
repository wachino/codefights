/*Please add ; after each select statement*/
CREATE PROCEDURE holidayEvent()
BEGIN
    SET @purchase = 0;
	SELECT DISTINCT buyer_name AS winners
    FROM(
        SELECT * FROM purchases
        WHERE (@purchase:=@purchase + 1)%4 = 0
        ORDER BY timestamp) t
    ORDER BY buyer_name;
END