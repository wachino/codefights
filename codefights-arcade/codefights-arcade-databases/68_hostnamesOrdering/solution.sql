/*Please add ; after each select statement*/
CREATE PROCEDURE hostnamesOrdering()
BEGIN
	SELECT id, hostname
    FROM hostnames
    GROUP BY SUBSTRING_INDEX(CONCAT(' .',hostname), '.', -1),
    SUBSTRING_INDEX(CONCAT(' ..',hostname), '.', -2), 
    hostname ASC;
END