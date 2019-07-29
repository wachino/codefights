/*Please add ; after each select statement*/
CREATE PROCEDURE dancingCompetition()
BEGIN
	SELECT arbiter_id, first_criterion,	second_criterion,	third_criterion
    FROM scores, (SELECT MAX(first_criterion) AS max1,
                    MIN(first_criterion) AS min1,
                     MAX(second_criterion) AS max2,
                    MIN(second_criterion) AS min2,
                  MAX(third_criterion) AS max3,
                    MIN(third_criterion) AS min3
                  FROM scores LIMIT 1) t
  WHERE (IF(first_criterion = max1 OR first_criterion = min1, 1, 0) + 
  IF(second_criterion = max2 OR second_criterion = min2, 1, 0) + 
  IF(third_criterion = max3 OR third_criterion = min3, 1, 0)) < 2;
END