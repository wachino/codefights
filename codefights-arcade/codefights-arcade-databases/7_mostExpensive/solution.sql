/*Please add ; after each select statement*/
CREATE PROCEDURE mostExpensive()
BEGIN
	SELECT name from Products ORDER BY price*quantity DESC, name LIMIT 1;
END