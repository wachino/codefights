/*Please add ; after each select statement*/
CREATE PROCEDURE battleshipGameResults()
BEGIN
     SELECT size, SUM(hits=0) AS undamaged, SUM(hits > 0 AND hits < size) AS partly_damaged, SUM(hits = size) AS sunk FROM (SELECT *, (bottom_right_x - upper_left_x + 1 ) * (bottom_right_y - upper_left_y + 1) AS size, (SELECT COUNT(distinct target_x, target_y) FROM opponents_shots WHERE target_x >= upper_left_x AND target_x <=bottom_right_x AND 
 target_y >= upper_left_y AND target_y <= bottom_right_y) AS hits FROM locations_of_ships) t GROUP BY size ORDER BY size;
END