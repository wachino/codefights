/*Please add ; after each select statement*/
CREATE PROCEDURE soccerPlayers()
BEGIN
	SELECT GROUP_CONCAT(CONCAT_WS(' ', first_name, surname, CONCAT('#', player_number)) ORDER BY player_number SEPARATOR '; ') AS players
    FROM soccer_team
    ORDER BY player_number;
END