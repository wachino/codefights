/*Please add ; after each select statement*/
CREATE PROCEDURE consecutiveIds()
BEGIN
    SET @id = 0;
	SELECT  id AS oldId, @id:=@id + 1 AS newId
    FROM itemIds
    ORDER BY id;
END