/*Please add ; after each select statement*/
CREATE PROCEDURE habitatArea()
BEGIN
	SELECT  ST_Area(ST_ConvexHull(ST_MPointFromText(CONCAT('MULTIPOINT(', GROUP_CONCAT(CONCAT_WS(' ', x, y)), ')')))) AS area
    FROM places;
END