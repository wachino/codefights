/*Please add ; after each select statement*/
CREATE PROCEDURE driversInfo()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE name VARCHAR(250) DEFAULT '';
    DECLARE cur1 CURSOR FOR SELECT * FROM names;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    DROP TABLE IF EXISTS tmp;
    CREATE TEMPORARY TABLE tmp (summary VARCHAR(250));
    DROP TABLE IF EXISTS names;
    CREATE TEMPORARY TABLE names AS SELECT DISTINCT driver_name FROM inspections
    ORDER BY driver_name;
    SET @name = '';
    OPEN cur1;
    
    INSERT INTO tmp VALUES(CONCAT(' Total miles driven by all drivers combined: ', (SELECT SUM(miles_logged) FROM inspections)));
    
read_loop: LOOP
    FETCH cur1 INTO name;
    IF done THEN
      LEAVE read_loop;
    END IF;
    INSERT INTO tmp VALUES((SELECT CONCAT(' Name: ', driver_name, '; number of inspections: ', COUNT(*), '; miles driven: ', SUM(miles_logged)) AS summary FROM inspections GROUP BY driver_name HAVING driver_name = name));
    INSERT INTO tmp (summary)
        SELECT CONCAT('  date: ', date, '; miles covered: ', miles_logged) AS summary FROM inspections WHERE driver_name = name
    ORDER BY date;
  END LOOP;

  CLOSE cur1;
  SELECT summary FROM tmp;
END