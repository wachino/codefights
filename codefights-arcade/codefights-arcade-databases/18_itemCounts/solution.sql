/*Please add ; after each select statement*/
CREATE PROCEDURE itemCounts()
BEGIN
	SELECT item_name, item_type, COUNT(*) as item_count FROM availableItems
    GROUP BY item_name, item_type
    ORDER BY item_type, item_name;
END