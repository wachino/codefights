/*Please add ; after each select statement*/
CREATE PROCEDURE scholarshipsDistribution()
BEGIN
	SELECT candidate_id AS student_id
    FROM candidates LEFT JOIN detentions ON candidate_id = student_id
    WHERE student_id is NULL;
END