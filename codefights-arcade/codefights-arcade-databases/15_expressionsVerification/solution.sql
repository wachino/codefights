/*Please add ; after each select statement*/
CREATE PROCEDURE expressionsVerification()
BEGIN
	SELECT * 
    FROM expressions
    WHERE CASE operation
        WHEN '+' THEN a+b
        WHEN '-' THEN a-b
        WHEN '*' THEN a*b
        WHEN '/' THEN a/b
    END = c
    ORDER BY id;
END