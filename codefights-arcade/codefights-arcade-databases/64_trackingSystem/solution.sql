/*Please add ; after each select statement*/
CREATE PROCEDURE trackingSystem()
BEGIN
    SELECT t3.anonym_id as anonym_id, last_null, first_notnull FROM
	(SELECT anonymous_id as anonym_id, event_name as last_null
    FROM tracks JOIN (
        SELECT MAX(received_at) last
        FROM tracks
        WHERE user_id IS NULL
        GROUP BY anonymous_id) t ON received_at = last) t3
    LEFT JOIN (
    SELECT anonymous_id as anonym_id, event_name as first_notnull
    FROM tracks JOIN (
        SELECT MIN(received_at) first
        FROM tracks
        WHERE user_id IS NOT NULL
        GROUP BY anonymous_id) t2 ON received_at = first) t4
    ON t3.anonym_id  = t4.anonym_id
    ORDER BY anonym_id;
END