/*Please add ; after each select statement*/
CREATE PROCEDURE closestCells()
BEGIN
	SELECT DISTINCT(t.id1) as id1, t.id2 as id2
    FROM ( SELECT p.id AS id1, r.id AS id2, ST_Distance(Point(p.x,p.y), Point(r.x,r.y)) AS dist
    FROM positions p, positions r
    WHERE p.id <> r.id
    ORDER By dist) AS t INNER JOIN ( SELECT f.id1, MIN(f.dist) as dist
    FROM ( SELECT p.id AS id1, r.id AS id2, ST_Distance(Point(p.x,p.y), Point(r.x,r.y)) AS dist
    FROM positions p, positions r
    WHERE p.id <> r.id
    ORDER By dist) AS f GROUP BY f.id1) AS g ON t.id1 = g.id1 AND t.dist = g.dist
    ORDER BY id1;
END