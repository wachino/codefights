/*Please add ; after each select statement*/
CREATE PROCEDURE correctIPs()
BEGIN
    SELECT *
    FROM ips
    WHERE ip REGEXP '^([0-1]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\.([0-1]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\.([1-9][0-9]\\.([0-1]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|([0-1]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\.[1-9][0-9])$'
    ORDER BY id;
END