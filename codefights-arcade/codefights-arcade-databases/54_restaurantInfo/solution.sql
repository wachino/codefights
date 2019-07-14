CREATE PROCEDURE restaurantInfo()
BEGIN
    ALTER TABLE restaurants
    ADD COLUMN description VARCHAR(100) DEFAULT 'TBD',
    ADD COLUMN active INT DEFAULT 1;

    SELECT * FROM restaurants ORDER BY id;
END