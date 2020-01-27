/*Please add ; after each select statement*/
CREATE FUNCTION charValue (ch VARCHAR(1))
RETURNS INT
BEGIN
    RETURN CASE ch
        WHEN 'I' THEN 1
        WHEN 'V' THEN 5 
        WHEN 'X' THEN 10 
        WHEN 'L' THEN 50 
        WHEN 'C' THEN 100 
        WHEN 'D' THEN 500 
        WHEN 'M' THEN 1000
        ELSE 0
    END;
END;

CREATE FUNCTION FromRomanNumerals (romanNumeral VARCHAR(100))
RETURNS INT
BEGIN
    DECLARE numeral INT DEFAULT 0;
    DECLARE pre INT DEFAULT 0;
    DECLARE cur INT DEFAULT 0;

    SET pre = charValue(LEFT(romanNumeral, 1));
    SET numeral = charValue(LEFT(romanNumeral, 1));
    SET romanNumeral = SUBSTRING(romanNumeral, 2);
    WHILE CHAR_LENGTH(romanNumeral) > 0 DO
        SET cur = charValue(LEFT(romanNumeral, 1));
        SET numeral = numeral + cur - IF(cur > pre, pre*2,0);
        SET romanNumeral = SUBSTRING(romanNumeral, 2);
        SET pre = cur;
    END WHILE;

  RETURN numeral;
END;

CREATE PROCEDURE sortBookChapters()
BEGIN
    
    
	SELECT chapter_name FROM book_chapters ORDER BY FromRomanNumerals(chapter_number);
END