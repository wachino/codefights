/*Please add ; after each select statement*/
CREATE PROCEDURE recentHires()
BEGIN
	SELECT name as names
    FROM (
        (SELECT *, 1 AS dep FROM pr_department ORDER BY date_joined DESC, name LIMIT 5)
        UNION
        (SELECT *, 2 AS dep FROM it_department ORDER BY date_joined DESC, name LIMIT 5)
        UNION
        (SELECT *, 3 AS dep FROM sales_department ORDER BY date_joined DESC, name LIMIT 5)
        ) u
    ORDER BY dep, name;

END