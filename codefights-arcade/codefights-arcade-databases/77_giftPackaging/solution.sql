/*Please add ; after each select statement*/
CREATE PROCEDURE giftPackaging()
BEGIN
    SELECT package_type, COUNT(*) AS number FROM (
    SELECT id , ( SELECT package_type
    FROM packages p
    WHERE g.length <= p.length AND g.width <= p.width AND g.height <= p.height ORDER BY length * width * height ASC LIMIT 1) AS package_type
    FROM gifts g) t
    GROUP BY package_type ASC;
END