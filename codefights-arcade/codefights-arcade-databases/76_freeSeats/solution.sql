/*Please add ; after each select statement*/
CREATE PROCEDURE freeSeats()
BEGIN
    SELECT flight_id, number_of_seats - sold_seats AS free_seats FROM
    planes JOIN (SELECT plane_id, flight_id, Count(seat_no) as sold_seats
    FROM flights LEFT JOIN purchases USING(flight_id)
    GROUP BY flight_id) AS t USING(plane_id)
    ORDER BY flight_id;
END