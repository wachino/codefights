DROP PROCEDURE IF EXISTS orderAnalytics;
CREATE PROCEDURE orderAnalytics()
BEGIN

    DROP TABLE IF EXISTS order_analytics;
    
    CREATE TABLE order_analytics AS
    SELECT id,YEAR(order_date) AS year , QUARTER(order_date) AS quarter, type, quantity*price AS total_price FROM orders
    ORDER BY id;

    SELECT *
    FROM order_analytics
    ORDER by id;
END;
