/*Please add ; after each select statement*/
CREATE PROCEDURE queriesExecution()
BEGIN

    DECLARE done INT DEFAULT FALSE;
    DECLARE qname VARCHAR(255) DEFAULT '';
    DECLARE qcode VARCHAR(255) DEFAULT '';
    DECLARE cur1 CURSOR FOR SELECT query_name, code FROM queries;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    DROP TABLE IF EXISTS tmp;
    CREATE TEMPORARY TABLE tmp (query_name VARCHAR(255), val VARCHAR(255));
    
    OPEN cur1;
    read_loop: LOOP
      FETCH cur1 INTO qname, qcode;
      IF done THEN
        LEAVE read_loop;
      END IF;

      SET @execq=CONCAT("INSERT INTO tmp values(", "'", qname, "'", ",(", qcode, "));");

      PREPARE stmt FROM @execq;
      EXECUTE stmt; 
      DEALLOCATE PREPARE stmt;
    END LOOP;
    CLOSE cur1;
    
    SELECT query_name, val FROM tmp;
END