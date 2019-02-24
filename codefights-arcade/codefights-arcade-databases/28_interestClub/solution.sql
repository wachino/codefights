CREATE PROCEDURE interestClub()
    SELECT name
    FROM people_interests
    WHERE interests & 1 AND interests & 8
    ORDER BY name
