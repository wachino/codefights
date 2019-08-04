DROP FUNCTION IF EXISTS response;
CREATE FUNCTION response(name VARCHAR(40)) RETURNS VARCHAR(200) DETERMINISTIC
BEGIN
    SET @firstName = CONCAT(SUBSTRING_INDEX(LOWER(name), ' ', 1));
    SET @secondName = CONCAT(SUBSTRING_INDEX(LOWER(name), ' ', -1));
    
    RETURN CONCAT('Dear ',UPPER(LEFT(@firstName,1)), MID(@firstName,2) ,' ',
                UPPER(LEFT(@secondName,1)), MID(@secondName,2),'! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team.');
END;

CREATE PROCEDURE customerMessages()
BEGIN
    SELECT id, name, response(name) AS response
    FROM customers;
END;
