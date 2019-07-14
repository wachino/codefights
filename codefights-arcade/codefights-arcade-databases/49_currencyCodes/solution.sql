CREATE PROCEDURE currencyCodes()
BEGIN
    DELETE FROM currencies
        WHERE CHAR_LENGTH(code) <> 3;

    SELECT * FROM currencies ORDER BY code;
END