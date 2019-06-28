/*Please add ; after each select statement*/
CREATE PROCEDURE placesOfInterestPairs()
BEGIN
	SELECT DISTINCT IF(a.name < b.name,a.name,b.name) AS place1, IF(a.name > b.name,a.name,b.name) AS place2
    FROM sights AS a, sights AS b
    WHERE a.name <> b.name AND ST_Distance(Point(a.x,a.y), Point(b.x,b.y)) < 5
    ORDER BY place1, place2;
END