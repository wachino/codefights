/*Please add ; after each select statement*/
CREATE PROCEDURE stringsStatistics()
BEGIN
    DECLARE c INT DEFAULT 97;
    DROP TABLE IF EXISTS alpha;
    CREATE TEMPORARY TABLE alpha (letter VARCHAR(2));

    WHILE c <= 122 DO
      INSERT INTO alpha VALUES(CHAR(c));
      SET c = c + 1;
    END WHILE;

    SELECT letter,  
     CHAR_LENGTH(tstring) - CHAR_LENGTH(REPLACE(tstring, letter, '')) AS total,
     (SELECT COUNT(*) FROM strs WHERE INSTR(str, letter) > 0) AS occurrence,
     (SELECT MAX(CHAR_LENGTH(str) - CHAR_LENGTH(REPLACE(str, letter, ''))) FROM strs) as max_occurrence,
    (SELECT COUNT(*) FROM strs WHERE (CHAR_LENGTH(str) - CHAR_LENGTH(REPLACE(str, letter, ''))) = max_occurrence) as max_occurrence_reached
    FROM alpha, (SELECT GROUP_CONCAT(str SEPARATOR '') AS tstring FROM strs) t 
    HAVING total > 0;
END