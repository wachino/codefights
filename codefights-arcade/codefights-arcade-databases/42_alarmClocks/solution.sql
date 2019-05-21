/*Please add ; after each select statement*/
CREATE PROCEDURE alarmClocks()
BEGIN
  DROP TABLE IF EXISTS tmp;
  CREATE TABLE IF NOT EXISTS tmp (alarm_date DATETIME);
  SELECT input_date FROM userInput INTO @ldate;
  SET @y = YEAR(@ldate) + 1;
  test_loop : LOOP
    IF (YEAR(@ldate) = @y) THEN
      LEAVE test_loop;
    END IF;

    INSERT INTO tmp VALUES(@ldate);
    SET @ldate = ADDDATE(@ldate, INTERVAL 1 WEEK);
  END LOOP; 
  SELECT alarm_date FROM tmp;
END;