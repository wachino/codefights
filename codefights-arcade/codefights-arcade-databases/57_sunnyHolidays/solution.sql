/*Please add ; after each select statement*/
CREATE PROCEDURE sunnyHolidays()
BEGIN
	SELECT holiday_date as ski_date
    FROM holidays INNER JOIN weather ON holiday_date = sunny_date;
END