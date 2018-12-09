/*Please add ; after each select statement*/
CREATE PROCEDURE countriesInfo()
BEGIN
	SELECT COUNT(*) as number, AVG(population) as average, SUM(population) as total FROM countries;
END