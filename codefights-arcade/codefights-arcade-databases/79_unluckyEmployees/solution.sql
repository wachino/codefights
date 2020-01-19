/*Please add ; after each select statement*/
CREATE PROCEDURE unluckyEmployees()
BEGIN
    SET @rn =0;
    SELECT dep_name, emp_number, total_salary FROM
    (SELECT dep_name, emp_number, total_salary, (@rn := @rn + 1) as seqnum  FROM
	(SELECT name AS dep_name, IF(e.id IS NULL, 0, COUNT(*)) AS emp_number,  IFNULL(SUM(salary), 0) AS total_salary
     FROM Department d LEFT JOIN Employee e ON e.Department = d.id
    GROUP BY d.id HAVING COUNT(*) < 6 ORDER BY SUM(salary) DESC, COUNT(*) DESC, d.id) t )tt  WHERE mod(seqnum, 2) = 1;
END