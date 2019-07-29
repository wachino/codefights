/*Please add ; after each select statement*/
CREATE PROCEDURE storageOptimization()
BEGIN
	SELECT * FROM (
        SELECT id, 'name' AS column_name, name AS value
        FROM workers_info WHERE name IS NOT NULL 
        UNION
        SELECT id, 'date_of_birth' AS column_name, date_of_birth AS value
        FROM workers_info WHERE date_of_birth IS NOT NULL
        UNION
        SELECT id, 'salary' AS column_name, salary AS value
        FROM workers_info WHERE salary IS NOT NULL
    ) t
    ORDER BY id, CASE column_name 
    WHEN 'name' THEN 1
    WHEN 'date_of_birth' THEN 2
    WHEN 'salary' THEN 3 END;
END