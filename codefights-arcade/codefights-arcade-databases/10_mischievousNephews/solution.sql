/*Please add ; after each select statement*/
CREATE PROCEDURE mischievousNephews()
BEGIN
    SELECT (DAYOFWEEK(mischief_date) + 5) MOD 7  AS weekday, mischief_date, author, title 
     FROM mischief ORDER BY weekday, CASE author
    WHEN 'Huey'  THEN 1
    WHEN 'Dewey' THEN 2
    WHEN 'Louie' THEN 3
    else 5 end, mischief_date, title;
END