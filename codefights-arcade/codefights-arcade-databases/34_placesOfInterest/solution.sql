/*Please add ; after each select statement*/
CREATE PROCEDURE placesOfInterest()
BEGIN
	SELECT country,
    SUM(adventure_park) AS adventure_park,
    SUM(golf) AS golf,
    SUM(river_cruise) AS river_cruise,
    SUM(kart_racing) AS kart_racing
    FROM (SELECT country, 
    IF(leisure_activity_type='Adventure park',SUM(number_of_places),0) as adventure_park,         IF(leisure_activity_type='Golf',SUM(number_of_places),0) as golf,
    IF(leisure_activity_type='River cruise',SUM(number_of_places),0) as river_cruise,
    IF(leisure_activity_type='Kart racing',SUM(number_of_places),0) as kart_racing
    FROM countryActivities
    GROUP BY country, leisure_activity_type
    ORDER BY country) t
    GROUP BY country;
END