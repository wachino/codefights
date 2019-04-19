/*Please add ; after each select statement*/
CREATE PROCEDURE soccerGameSeries()
BEGIN
    SELECT CASE
        WHEN wins > 0 THEN 1
        WHEN wins < 0 THEN 2
            ELSE CASE
            WHEN goaldiff > 0 THEN 1
            WHEN goaldiff < 0 THEN 2
                ELSE CASE
                WHEN goalsaway > 0 THEN 1
                WHEN goalsaway < 0 THEN 2
                ELSE 0
                END
            END
    END AS winner FROM
    (SELECT SUM(wins) as wins,
           SUM(goaldiff) as goaldiff,
           SUM(goalsaway) as goalsaway
        FROM (SELECT match_id,
        IF(first_team_score = second_team_score, 0, IF(first_team_score >                   second_team_score, 1, -1)) AS wins,
        first_team_score-second_team_score AS goaldiff,
        IF(match_host=2, first_team_score, -second_team_score) AS goalsaway
        FROM scores) dt) dd;
END