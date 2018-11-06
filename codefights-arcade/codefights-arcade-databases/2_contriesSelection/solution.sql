/*Please add ; after each select statement*/
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT * FROM countries WHERE continent='Africa' order by name;
END