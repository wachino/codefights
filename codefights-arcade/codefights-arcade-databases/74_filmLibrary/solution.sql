/*Please add ; after each select statement*/
CREATE PROCEDURE filmLibrary()
BEGIN
    SET @favGenre = (SELECT genre FROM movies GROUP BY genre ORDER BY COUNT(*) DESC LIMIT 1);
    SELECT aa.actor as actor, age
    FROM actor_ages aa INNER JOIN starring_actors sa ON aa.actor = sa.actor
    INNER JOIN movies m ON sa.movie_name = m.movie
    WHERE m.genre=@favGenre
    ORDER BY age DESC, aa.actor;
END