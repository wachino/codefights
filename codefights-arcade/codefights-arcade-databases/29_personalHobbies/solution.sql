/*Please add ; after each select statement*/
CREATE PROCEDURE personalHobbies()
BEGIN
	SELECT name
    FROM people_hobbies
    WHERE hobbies & 3  =3
    ORDER BY name;
END